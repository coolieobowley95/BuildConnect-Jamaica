import sql from "@/app/api/utils/sql";

export async function POST(request) {
  try {
    const body = await request.json();
    const { full_name, phone, parish, job_type, description } = body;

    // Validate required fields
    if (!full_name || !phone || !parish || !job_type || !description) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Insert job request
    const result = await sql`
      INSERT INTO job_requests (full_name, phone, parish, job_type, description)
      VALUES (${full_name}, ${phone}, ${parish}, ${job_type}, ${description})
      RETURNING id, created_at
    `;

    return Response.json({
      success: true,
      id: result[0].id,
      message: "Job request submitted successfully",
    });
  } catch (error) {
    console.error("Error creating job request:", error);
    return Response.json(
      { error: "Failed to submit request" },
      { status: 500 },
    );
  }
}

export async function GET(request) {
  try {
    const requests = await sql`
      SELECT * FROM job_requests
      ORDER BY created_at DESC
      LIMIT 100
    `;

    return Response.json({ requests });
  } catch (error) {
    console.error("Error fetching job requests:", error);
    return Response.json(
      { error: "Failed to fetch requests" },
      { status: 500 },
    );
  }
}
