import data from '../src/data/pokemon/pokemon.js';

import {
  filterType,
  filtrarPelaGeracao,
  sortCp,
  ordenarPorNome,
  ordenarPorNum,
  typeStats,
  filterName,
  sortFilter
} from '../src/data.js';

const pokeList =  data.pokemon;

const pokeMock = {
  "pokemon": [{
    "num": "001",
    "name": "bulbasaur",
    "type": ["grass", "poison"],
    "stats": { "max-cp": "1115" }
  },
  {
    "num": "004",
    "name": "charmander",
    "type": ["fire"],
    "stats": { "max-cp": "980" }
  },
  {
    "num": "002",
    "name": "ivysaur",
    "type": ["grass", "poison"],
    "stats": { "max-cp": "1699" }
  },
  {
    "num": "009",
    "name": "blastoise",
    "type": ["water"],
    "stats": {"max-cp": "2466"}
  },
  {
    "num": "005",
    "name": "charmeleon",
    "type": ["fire"],
    "stats": { "max-cp": "1653" }
  },
  {
    "num": "003",
    "name": "venusaur",
    "type": ["grass", "poison"],
    "stats": { "max-cp": "2720" }
  }]
}

const pokeTest = pokeMock.pokemon

describe('ordem alfabetica', () => {
  it('Deve ser uma função', () => {
    expect(typeof ordenarPorNome).toBe('function')
  });

  it('ordenar por nome A-Z', () => {
    const normal = [
      { name: 'squirtle' },
      { name: 'wartortle' },
      { name: 'blastoise' },

    ];
    const input = 'A-Z';
    const organize = [
      { name: 'blastoise' },
      { name: 'squirtle' },
      { name: 'wartortle' },
    ];

    expect(ordenarPorNome(normal, input)).toEqual(organize);
  });
  it('ordernar por nome Z-A', () => {
    const normal = [
      { name: 'blastoise' },
      { name: 'squirtle' },
      { name: 'wartortle' },

    ];
    const input = 'Z-A';
    const organize = [
      { name: 'wartortle' },
      { name: 'squirtle' },
      { name: 'blastoise' },
    ];
    expect(ordenarPorNome(normal, input)).toEqual(organize);
  })
});


describe('ordem numerica', () => {

  it('Deve ser uma função', () => {
    expect(typeof ordenarPorNum).toBe('function')
  });

  it('ordem decrescente', () => {
    const organize = [
      {
        "num": "009",
        "name": "blastoise",
        "type": ["water"],
        "stats": {"max-cp": "2466"}
      },
      {
        "num": "005",
        "name": "charmeleon",
        "type": ["fire"],
        "stats": { "max-cp": "1653" }
      },
      {
        "num": "004",
        "name": "charmander",
        "type": ["fire"],
        "stats": { "max-cp": "980" }
      },
      {
        "num": "003",
        "name": "venusaur",
        "type": ["grass", "poison"],
        "stats": { "max-cp": "2720" }
      },
      {
        "num": "002",
        "name": "ivysaur",
        "type": ["grass", "poison"],
        "stats": { "max-cp": "1699" }
      },
      {
        "num": "001",
        "name": "bulbasaur",
        "type": ["grass", "poison"],
        "stats": { "max-cp": "1115" }
      }];

    expect(ordenarPorNum(pokeTest, 'decrescent')).toEqual(organize);
  });

  it('ordem crescente', () => {
    const organize = [
    {
      "num": "001",
      "name": "bulbasaur",
      "type": ["grass", "poison"],
      "stats": { "max-cp": "1115" }
    },
    {
      "num": "002",
      "name": "ivysaur",
      "type": ["grass", "poison"],
      "stats": { "max-cp": "1699" }
    },
    {
      "num": "003",
      "name": "venusaur",
      "type": ["grass", "poison"],
      "stats": { "max-cp": "2720" }
    },
    {
      "num": "004",
      "name": "charmander",
      "type": ["fire"],
      "stats": { "max-cp": "980" }
    },
    {
      "num": "005",
      "name": "charmeleon",
      "type": ["fire"],
      "stats": { "max-cp": "1653" }
    },
    {
      "num": "009",
      "name": "blastoise",
      "type": ["water"],
      "stats": {"max-cp": "2466"}
    }]
  expect(ordenarPorNum(pokeTest, 'crescent')).toEqual(organize)
  })
});


describe('filtrarPelaGeracao', () => {

  it('should be a function', () => {
    expect(typeof filtrarPelaGeracao).toBe('function');
  })

  it('Pokemons da Primeira Geração', () => {
    expect(filtrarPelaGeracao(data.pokemon, 'kanto')).toHaveLength(151);

  });

  it('Pokemons da Segunda Geração', () => {
    expect(filtrarPelaGeracao(data.pokemon, 'johto')).toHaveLength(100);
  })
});

describe('sortCp', () => {

  it('should be a function', () => {
    expect(typeof sortCp).toBe('function');
  })

  it('ordem decrescente', () => {
    const organize = [
      {
        "num": "003",
        "name": "venusaur",
        "type": ["grass", "poison"],
        "stats": { "max-cp": "2720" }
      },
      {
        "num": "009",
        "name": "blastoise",
        "type": ["water"],
        "stats": {"max-cp": "2466"}
      },
      {
        "num": "002",
        "name": "ivysaur",
        "type": ["grass", "poison"],
        "stats": { "max-cp": "1699" }
      },
      {
        "num": "005",
        "name": "charmeleon",
        "type": ["fire"],
        "stats": { "max-cp": "1653" }
      },
      {
        "num": "001",
        "name": "bulbasaur",
        "type": ["grass", "poison"],
        "stats": { "max-cp": "1115" }
      },
      {
        "num": "004",
        "name": "charmander",
        "type": ["fire"],
        "stats": { "max-cp": "980" }
      }];

    expect(sortCp(pokeTest, 'decrescent')).toEqual(organize);
  })

  it('ordem crescente', () => {
    const organize = [
      {
        "num": "004",
        "name": "charmander",
        "type": ["fire"],
        "stats": { "max-cp": "980" }
      },
      {
        "num": "001",
        "name": "bulbasaur",
        "type": ["grass", "poison"],
        "stats": { "max-cp": "1115" }
      },
      {
        "num": "005",
        "name": "charmeleon",
        "type": ["fire"],
        "stats": { "max-cp": "1653" }
      },
      {
        "num": "002",
        "name": "ivysaur",
        "type": ["grass", "poison"],
        "stats": { "max-cp": "1699" }
      },
      {
        "num": "009",
        "name": "blastoise",
        "type": ["water"],
        "stats": {"max-cp": "2466"}
      },
      {
        "num": "003",
        "name": "venusaur",
        "type": ["grass", "poison"],
        "stats": { "max-cp": "2720" }
      }];
    expect(sortCp(pokeTest, 'crescent')).toEqual(organize)
  })
});



describe('filterType', () => {

  it('should be a function', () => {
    expect(typeof filterType).toBe('function');
  })

  it("Espera-se por pokemon do tipo", () => {
    expect(filterType(data.pokemon, 'water')).toHaveLength(50);
  });
});

describe('filterType', () => {
  it("Espera-se por pokemon do tipo", () => {
    expect(filterType(data.pokemon, 'fire')).toHaveLength(22);
  });
});

describe('filterType', () => {
  it("Espera-se por pokemon do tipo", () => {
    expect(filterType(data.pokemon, 'dark')).toHaveLength(6);
  });
});

describe('filterType', () => {
  it("Espera-se por pokemon do tipo", () => {
    expect(filterType(data.pokemon, 'bug')).toHaveLength(22);
  });
});

describe('filterType', () => {
  it("Espera-se por pokemon do tipo", () => {
    expect(filterType(data.pokemon, 'rock')).toHaveLength(18);
  });
});

describe('typeStats', () => {

  it('should be a function', () => {
    expect(typeof typeStats).toBe('function');
  })

  it("porcentagem de pokemons por tipo", () => {
    expect(typeStats(pokeList, 'fire')).toBe(9);
  })

  it("porcentagem de pokemons por tipo", () => {
    expect(typeStats(pokeList, 'water')).toBe(20);
  })
})

describe('filterName', () => {

  it('should be a function', () => {
    expect(typeof filterName).toBe('function');
  })

  it("filtrar pokemons pelo nome", () => {
    const organize = [
      {
        "num": "001",
        "name": "bulbasaur",
        "type": ["grass", "poison"],
        "stats": { "max-cp": "1115" }
      },
      {
        "num": "009",
        "name": "blastoise",
        "type": ["water"],
        "stats": {"max-cp": "2466"}
      }];
    expect(filterName(pokeTest, 'b')).toEqual(organize)
  })
})

describe('sortFilter', () => {

  it('should be a function', () => {
    expect(typeof sortFilter).toBe('function');
  })

  it("ordena os pokemons na busca", () => {
    const organize = [
      {
        "num": "009",
        "name": "blastoise",
        "type": ["water"],
        "stats": {"max-cp": "2466"}
      },
      {
        "num": "001",
        "name": "bulbasaur",
        "type": ["grass", "poison"],
        "stats": { "max-cp": "1115" }
      },
      {
        "num": "004",
        "name": "charmander",
        "type": ["fire"],
        "stats": { "max-cp": "980" }
      },
      {
        "num": "005",
        "name": "charmeleon",
        "type": ["fire"],
        "stats": { "max-cp": "1653" }
      },{
        "num": "002",
        "name": "ivysaur",
        "type": ["grass", "poison"],
        "stats": { "max-cp": "1699" }
      },
      {
        "num": "003",
        "name": "venusaur",
        "type": ["grass", "poison"],
        "stats": { "max-cp": "2720" }
      }]
    expect(sortFilter(pokeTest)).toEqual(organize)
  })
})