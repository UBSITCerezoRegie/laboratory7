import { Injectable , signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  kantoPokemon = signal([
    {
      id: 1,
      name: 'Charizard',
      type: 'Fire/Flying',
      heldItem: 'Charcoal',
      description: 'A powerful Pokémon that breathes intense flames capable of melting rocks.'
    },
    {
      id: 2,
      name: 'Gengar',
      type: 'Ghost/Poison',
      heldItem: 'Spell Tag',
      description: 'A mischievous ghost Pokémon that hides in shadows and enjoys pranks.'
    },
    {
      id: 3,
      name: 'Alakazam',
      type: 'Psychic',
      heldItem: 'Twisted Spoon',
      description: 'Its brain never stops growing, giving it extraordinary psychic abilities.'
    },
    {
      id: 4,
      name: 'Lapras',
      type: 'Water/Ice',
      heldItem: 'Mystic Water',
      description: 'A gentle Pokémon known for carrying people across bodies of water.'
    },
    {
      id: 5,
      name: 'Dragonite',
      type: 'Dragon/Flying',
      heldItem: 'Dragon Fang',
      description: 'A kind-hearted dragon Pokémon capable of circling the globe in hours.'
    },
    {
      id: 6,
      name: 'Snorlax',
      type: 'Normal',
      heldItem: 'Leftovers',
      description: 'A huge Pokémon that spends most of its time sleeping and eating.'
    }
  ]);
  johtoPokemon = signal([
    {
      id: 7,
      name: 'Typhlosion',
      type: 'Fire',
      heldItem: 'Charcoal',
      description: 'Its explosive fire attacks become stronger when it is angry.'
    },
    {
      id: 8,
      name: 'Ampharos',
      type: 'Electric',
      heldItem: 'Magnet',
      description: 'The light from its tail can be seen from far away and serves as a beacon.'
    },
    {
      id: 9,
      name: 'Heracross',
      type: 'Bug/Fighting',
      heldItem: 'Black Belt',
      description: 'A powerful fighter that can lift objects many times its own weight.'
    },
    {
      id: 10,
      name: 'Umbreon',
      type: 'Dark',
      heldItem: 'Black Glasses',
      description: 'It hides in darkness and waits patiently for the right moment to strike.'
    },
    {
      id: 11,
      name: 'Scizor',
      type: 'Bug/Steel',
      heldItem: 'Metal Coat',
      description: 'Its steel claws are powerful enough to crush hard objects.'
    },
    {
      id: 12,
      name: 'Tyranitar',
      type: 'Rock/Dark',
      heldItem: 'Hard Stone',
      description: 'Its immense strength can alter landscapes and level mountains.'
    }
  ]);

hoennPokemon = signal([
  {
    id: 13,
    name: 'Blaziken',
    type: 'Fire/Fighting',
    heldItem: 'Black Belt',
    description: 'Its powerful kicks can launch opponents into the air.'
  },
  {
    id: 14,
    name: 'Metagross',
    type: 'Steel/Psychic',
    heldItem: 'Metal Coat',
    description: 'A supercomputer-like Pokémon with incredible intelligence.'
  },
  {
    id: 15,
    name: 'Gardevoir',
    type: 'Psychic/Fairy',
    heldItem: 'Twisted Spoon',
    description: 'It will risk its life to protect its trainer using psychic powers.'
  },
  {
    id: 16,
    name: 'Salamence',
    type: 'Dragon/Flying',
    heldItem: 'Dragon Fang',
    description: 'After evolving, it gained wings and fulfilled its dream of flying.'
  },
  {
    id: 17,
    name: 'Aggron',
    type: 'Steel/Rock',
    heldItem: 'Iron Ball',
    description: 'It fiercely protects its mountain territory from intruders.'
  },
  {
    id: 18,
    name: 'Flygon',
    type: 'Ground/Dragon',
    heldItem: 'Soft Sand',
    description: 'Known as the Spirit of the Desert, it creates sandstorms while flying.'
  }
]);
}
