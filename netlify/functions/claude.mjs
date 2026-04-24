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
