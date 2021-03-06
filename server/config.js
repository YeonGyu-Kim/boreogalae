import dotenv from "dotenv";
dotenv.config();

function required(key, defaultValue = undefined) {
  const value = process.env[key] || defaultValue;
  if (value === null) {
    throw new Error(`Key ${key} is undefined`);
  }
  return value;
}

export const config = {
  jwt: {
    secretKey: required("JWT_SECRET"),
    expireInsec: parseInt(required("JWT_EXPIRES_SEC", 86400)),
  },

  port: parseInt(required("PORT", 8080)),
  cors: {
    allowedOrigin: required("CORS_ALLOW_ORIGIN"),
  },
  db: {
    host: required("DB_HOST"),
    user: required("DB_USER"),
    database: required("DB_DATABASE"),
    password: required("DB_PASSWORD"),
    port: required("DB_PORT"),
  },
};
