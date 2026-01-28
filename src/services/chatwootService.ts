
const BASE_URL = import.meta.env.VITE_CHATWOOT_BASE_URL;
const ACCOUNT_ID = import.meta.env.VITE_CHATWOOT_ACCOUNT_ID;
const INBOX_ID = Number(import.meta.env.VITE_CHATWOOT_INBOX_ID);
const TOKEN = import.meta.env.VITE_CHATWOOT_TOKEN;

const HEADERS = {
    "Content-Type": "application/json",
    "api_access_token": TOKEN,
};

// In-memory cache to avoid repeated lookups during the session
let cachedContactId: number | null = null;
let cachedConversationId: number | null = null;

async function findContact(email: string) {
    console.log(`[Chatwoot] Searching contact: ${email}`);
    try {
        const response = await fetch(
            `${BASE_URL}/api/v1/accounts/${ACCOUNT_ID}/contacts/search?q=${encodeURIComponent(email)}`,
            { headers: HEADERS }
        );

        if (!response.ok) {
            console.error(`[Chatwoot] Search failed: ${response.status} ${response.statusText}`);
            const text = await response.text();
            console.error(`[Chatwoot] Response: ${text}`);
            return null;
        }

        const data = await response.json();
        console.log("[Chatwoot] Search result:", data);

        if (data.payload && data.payload.length > 0) {
            return data.payload[0].id;
        }
        return null;
    } catch (error) {
        console.error("[Chatwoot] Error searching contact:", error);
        return null;
    }
}

async function createContact(email: string, name?: string) {
    console.log(`[Chatwoot] Creating contact: ${email}`);
    try {
        const response = await fetch(`${BASE_URL}/api/v1/accounts/${ACCOUNT_ID}/contacts`, {
            method: "POST",
            headers: HEADERS,
            body: JSON.stringify({
                email,
                name: name || email.split("@")[0],
                inbox_id: INBOX_ID,
            }),
        });

        if (!response.ok) {
            const err = await response.text();
            console.error("[Chatwoot] Error creating contact:", err);
            return null;
        }
        const data = await response.json();
        console.log("[Chatwoot] Contact created:", data);
        return data.payload.contact.id;
    } catch (error) {
        console.error("[Chatwoot] Exception creating contact:", error);
        return null;
    }
}

async function createConversation(contactId: number) {
    console.log(`[Chatwoot] Creating conversation for contact: ${contactId}`);
    try {
        const response = await fetch(`${BASE_URL}/api/v1/accounts/${ACCOUNT_ID}/conversations`, {
            method: "POST",
            headers: HEADERS,
            body: JSON.stringify({
                source_id: contactId,
                inbox_id: INBOX_ID,
                status: "open"
            }),
        });

        if (!response.ok) {
            const err = await response.text();
            console.error("[Chatwoot] Error creating conversation:", err);
            return null;
        }

        const data = await response.json();
        console.log("[Chatwoot] Conversation created/found:", data);
        return data.id;
    } catch (error) {
        console.error("[Chatwoot] Exception creating conversation:", error);
        return null;
    }
}

async function sendMessage(conversationId: number, content: string, messageType: "incoming" | "outgoing") {
    console.log(`[Chatwoot] Sending ${messageType} message to convo ${conversationId}`);
    try {
        const response = await fetch(
            `${BASE_URL}/api/v1/accounts/${ACCOUNT_ID}/conversations/${conversationId}/messages`,
            {
                method: "POST",
                headers: HEADERS,
                body: JSON.stringify({
                    content,
                    message_type: messageType,
                    private: false,
                }),
            }
        );

        if (!response.ok) {
            const text = await response.text();
            console.error(`[Chatwoot] Send failed: ${text}`);
            return false;
        }

        const data = await response.json();
        console.log("[Chatwoot] Message sent:", data);
        return true;
    } catch (error) {
        console.error("[Chatwoot] Exception sending message:", error);
        return false;
    }
}

export const chatwootService = {
    syncMessage: async (email: string, content: string, messageType: "incoming" | "outgoing" = "incoming") => {
        console.log("[Chatwoot] Sync started...");

        // 1. Resolve Contact
        if (!cachedContactId) {
            cachedContactId = await findContact(email);
            if (!cachedContactId) {
                cachedContactId = await createContact(email);
            }
        }

        if (!cachedContactId) {
            console.error("[Chatwoot] Could not resolve Chatwoot Contact ID");
            return;
        }

        // 2. Resolve Conversation
        if (!cachedConversationId) {
            cachedConversationId = await createConversation(cachedContactId);
        }

        if (!cachedConversationId) {
            console.error("[Chatwoot] Could not resolve Chatwoot Conversation ID");
            return;
        }

        // 3. Send Message
        await sendMessage(cachedConversationId, content, messageType);
    },
};
