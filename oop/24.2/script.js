class Pokemon {
    constructor(pokemonName, pokemonType, pokemonAttackList) {
      this.name = pokemonName;
      this.type = pokemonType;
      this.attackList = pokemonAttackList;
    }
  
    callPokemon() {
      console.log(`I choose you, ${this.name}`);
    }
  
    attack(attackNumber) {
      console.log(`${this.name} used ${this.attackList[attackNumber]}`);
    }
  }
  
  const Pikachu = new Pokemon("Pikachu", "Electric", ["Thunderbolt", "Quick Attack", "Iron Tail"]);
  const Charmander = new Pokemon("Charmander", "Fire", ["Ember", "Flamethrower", "Fire Punch"]);
  const Bulbasaur = new Pokemon("Bulbasaur", "Grass", ["Razor Leaf", "Solar Beam", "Petal Dance"]);
  
  Pikachu.callPokemon();
  Pikachu.attack(0);
  
  Charmander.callPokemon();
  Charmander.attack(2);
  
  Bulbasaur.callPokemon();
  Bulbasaur.attack(1);
  