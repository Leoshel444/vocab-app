export default async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS"
      }
    });
  }

  const body = await request.text();

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "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",
      "anthropic-version": "2023-06-01"
    },
    body: body
  });

  const data = await response.text();

  return new Response(data, {
    status: response.status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
};

export const config = {
  path: "/api/claude"
};
