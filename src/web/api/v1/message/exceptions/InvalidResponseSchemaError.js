class InvalidResponseSchemaError extends Error {
  constructor(errors) {
    errors = errors.map((err) => {
      return `[${err.keyword} validation] at "${err.dataPath}" ${err.message}`;
    });

    super(errors.join(', '));
    this.name = 'InvalidResponseSchemaError';
  }
}

module.exports = InvalidResponseSchemaError;
