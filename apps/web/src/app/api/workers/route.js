import sql from "@/app/api/utils/sql";

export async function POST(request) {
  try {
    const body = await request.json();
    const { full_name, skill, parish, phone, years_experience } = body;

    // Validate required fields
    if (
      !full_name ||
      !skill ||
      !parish ||
      !phone ||
      years_experience === undefined
    ) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Validate years_experience is a number
    const experience = parseInt(years_experience, 10);
    if (isNaN(experience) || experience < 0) {
      return Response.json(
        { error: "Years of experience must be a valid number" },
        { status: 400 },
      );
    }

    // Insert worker signup
    const result = await sql`
      INSERT INTO worker_signups (full_name, skill, parish, phone, years_experience)
      VALUES (${full_name}, ${skill}, ${parish}, ${phone}, ${experience})
      RETURNING id, created_at
    `;

    return Response.json({
      success: true,
      id: result[0].id,
      message: "Worker application submitted successfully",
    });
  } catch (error) {
    console.error("Error creating worker signup:", error);
    return Response.json(
      { error: "Failed to submit application" },
      { status: 500 },
    );
  }
}

export async function GET(request) {
  try {
    const workers = await sql`
      SELECT * FROM worker_signups
      ORDER BY created_at DESC
      LIMIT 100
    `;

    return Response.json({ workers });
  } catch (error) {
    console.error("Error fetching worker signups:", error);
    return Response.json({ error: "Failed to fetch workers" }, { status: 500 });
  }
}
