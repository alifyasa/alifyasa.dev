export async function GET() {
  return new Response(
    JSON.stringify(
      [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/alif-yasa",
        },
        {
          name: "GitHub",
          url: "https://github.com/alifyasa",
        },
        {
          name: "email",
          url: "mailto://contact@alifyasa.dev",
        },
      ].sort((a, b) => a.name.localeCompare(b.name)),
    ),
  );
}
