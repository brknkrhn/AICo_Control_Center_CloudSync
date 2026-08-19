// Vercel Serverless Function
// Gorevi: .env icindeki SUPABASE_URL ve SUPABASE_ANON_KEY degerlerini
// guvenli bir sekilde runtime'da JSON olarak istemciye sunmak.
// Client-side JS dogrudan .env okuyamaz; bu endpoint dinamik okuma katmanidir.

export default function handler(req, res) {
  const SUPABASE_URL = process.env.SUPABASE_URL || "";
  const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || "";

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    return res.status(500).json({
      error: "SUPABASE_URL veya SUPABASE_ANON_KEY .env icinde tanimli degil. Vercel Project Settings > Environment Variables bolumunden ekleyin."
    });
  }

  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).json({
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  });
}
