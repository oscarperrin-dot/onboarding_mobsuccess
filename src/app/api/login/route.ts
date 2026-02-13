import { NextResponse } from "next/server";

const AUTH_COOKIE = "mobsuccess_auth";
const AUTH_VALUE = "authenticated";
const ALLOWED_IDENTIFIER = "mobsuccess";
const ALLOWED_PASSWORD = "MDPmobsuccess";

type LoginPayload = {
  identifier?: string;
  password?: string;
};

export async function POST(request: Request) {
  let payload: LoginPayload;

  try {
    payload = (await request.json()) as LoginPayload;
  } catch {
    return NextResponse.json({ message: "Requête invalide." }, { status: 400 });
  }

  const identifier = payload.identifier?.trim() ?? "";
  const password = payload.password ?? "";

  if (identifier !== ALLOWED_IDENTIFIER || password !== ALLOWED_PASSWORD) {
    return NextResponse.json(
      { message: "Identifiant ou mot de passe incorrect." },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: AUTH_COOKIE,
    value: AUTH_VALUE,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
