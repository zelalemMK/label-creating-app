import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import { SequelizeAdapter } from "@next-auth/sequelize-adapter";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.DATABASE_URL);

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await sequelize.models.User.findOne({
          where: { email: credentials.email },
        });
        if (user && credentials.password === "your_secure_password") {
          return user;
        } else {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  // adapter: SequelizeAdapter(sequelize),
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
