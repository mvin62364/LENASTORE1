module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '15cf8eb4a70ab1a3fa6f8342a84789a3'),
  },
});
