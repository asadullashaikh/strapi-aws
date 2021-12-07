module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0166418fd9755563adf6133dcf74d79f'),
  },
});
