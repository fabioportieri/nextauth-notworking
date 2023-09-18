import NextAuth from "next-auth";

import KeycloakProvider from "next-auth/providers/keycloak";
const authOptions = {
  // Configure one or more authentication providers
  providers: [
    KeycloakProvider({
      id: "keycloak",
      clientId: process.env.KEYCLOAK_ID!,
      clientSecret: process.env.KEYCLOAK_SECRET!,
      issuer: process.env.KEYCLOAK_ISSUER,
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    // }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };