export async function onRequest({ env }) {
  const db = env.DB;

  const { results } = await db
    .prepare("SELECT * FROM members ORDER BY next_pay_date DESC")
    .all();

  return new Response(JSON.stringify({ ok: true, items: results || [] }), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
