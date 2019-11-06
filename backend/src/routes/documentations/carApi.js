exports.searchCarSchema = {
  description: 'Search some car',
  tags: ['cars'],
  summary: 'Search some car with given values',
  querystring: {
    type: 'object',
    properties: {
      title: {
        type: 'string'
      },
      brand: {
        type: 'string'
      },
      price: {
        type: 'string'
      },
      age: {
        type: 'number'
      },
      keywords: {
        type: 'string'
      }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'array',
      items: {
        type: 'object',
          properties : {
            title: {
              type: 'string'
            },
            brand: {
              type: 'string'
            },
            price: {
              type: 'string'
            },
            age: {
              type: 'number'
            },
            services: {
              type: 'object'
            }
        }
      }
    }
  }
}

exports.addCarSchema = {
  description: 'Create a new car',
  tags: ['cars'],
  summary: 'Creates new car with given values',
  body: {
    type: 'object',
    properties: {
      _id: {
        type: 'string'
      },
      title: {
        type: 'string'
      },
      brand: {
        type: 'string'
      },
      price: {
        type: 'string'
      },
      age: {
        type: 'number'
      },
      services: {
        type: 'object'
      },
      __v: {
        type: 'number'
      }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: {
          type: 'string'
        },
        title: {
          type: 'string'
        },
        brand: {
          type: 'string'
        },
        price: {
          type: 'string'
        },
        age: {
          type: 'number'
        },
        services: {
          type: 'object'
        },
        __v: {
          type: 'number'
        }
      }
    }
  }
}

exports.updateCarSchema = {
  description: 'Update a new car',
  tags: ['cars'],
  summary: 'Update car with given values',
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'car id'
      }
    }
  },
  body: {
    type: 'object',
    properties: {
      title: {
        type: 'string'
      },
      brand: {
        type: 'string'
      },
      price: {
        type: 'string'
      },
      age: {
        type: 'number'
      },
      services: {
        type: 'object'
      }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: {
          type: 'string'
        },
        title: {
          type: 'string'
        },
        brand: {
          type: 'string'
        },
        price: {
          type: 'string'
        },
        age: {
          type: 'number'
        },
        services: {
          type: 'object'
        },
        __v: {
          type: 'number'
        }
      }
    }
  }
}

exports.detailCarSchema = {
  description: 'Detail a new car',
  tags: ['cars'],
  summary: 'Detail car with given values',
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'car id'
      }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: {
          type: 'string'
        },
        title: {
          type: 'string'
        },
        brand: {
          type: 'string'
        },
        price: {
          type: 'string'
        },
        age: {
          type: 'number'
        },
        services: {
          type: 'object'
        },
        __v: {
          type: 'number'
        }
      }
    }
  }
}

exports.deleteCarSchema = {
  description: 'Delete a new car',
  tags: ['cars'],
  summary: 'Delete car with given values',
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'car id'
      }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: {
          type: 'string'
        },
        title: {
          type: 'string'
        },
        brand: {
          type: 'string'
        },
        price: {
          type: 'string'
        },
        age: {
          type: 'number'
        },
        services: {
          type: 'object'
        },
        __v: {
          type: 'number'
        }
      }
    }
  }
}