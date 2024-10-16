import { dangerouslyFetchPlaceReviews } from "react-google-reviews";

export default async function handler(req, res) {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_API_KEY;

  try {
    const reviews = await dangerouslyFetchPlaceReviews(placeId, apiKey);
    res.status(200).json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
}
