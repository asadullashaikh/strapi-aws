module.exports = ({ env }) => ({
    upload: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AKIASYPDU2D355TBRRFC'),
        secretAccessKey: env('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'),
        region: env('ap-south-1'),
        params: {
          Bucket: env('strapi-apps-bucket'),
        },
      },
    },
  });