
exports.allSchema = [
  {
    $id: 'addCarSchema',
    type: 'object',
    properties: {
      title: { type: 'string' },
      brand: { type: 'string' },
      price: { type: 'string' },
      age: { type: 'number' },
      services: { type: 'object' }
    }
  }
]

exports.addCarSchema = 'addCarSchema#'