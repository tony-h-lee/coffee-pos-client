export default {
  id: '1',
  name: `Rob's Coffee`,
  items: [
    {
      id: 'd1',
      name: 'Coffee',
      cost: '2'
    },
    {
      id: 'd2',
      name: 'Latte',
      cost: '4'
    },
    {
      id: 'd3',
      name: 'Smoothie',
      cost: '3'
    },
    {
      id: 'd4',
      name: 'Cappuccino',
      cost: '3'
    },
    {
      id: 'd5',
      name: 'Mocha',
      cost: '3'
    },
    {
      id: 'd6',
      name: 'Espresso',
      cost: '3'
    }
  ],
  modifications: [
    {
      id: 'm7',
      name: 'Tall',
      to: [
        {
          id: 'd1',
        },
        {
          id: 'd2',
        }
        ,
        {
          id: 'd3',
        }
        ,
        {
          id: 'd4',
        }
        ,
        {
          id: 'd5',
        }
        ,
        {
          id: 'd6',
        }
      ],
      cost: '0'
    },
    {
      id: 'm1',
      name: 'Grande',
      to: [
        {
          id: 'd1',
        },
        {
          id: 'd2',
        }
        ,
        {
          id: 'd3',
        }
        ,
        {
          id: 'd4',
        }
        ,
        {
          id: 'd5',
        }
        ,
        {
          id: 'd6',
        }
      ],
      cost: '0.75'
    },
    {
      id: 'm8',
      name: 'Venti',
      to: [
        {
          id: 'd1',
        },
        {
          id: 'd2',
        }
        ,
        {
          id: 'd3',
        }
        ,
        {
          id: 'd4',
        }
        ,
        {
          id: 'd5',
        }
        ,
        {
          id: 'd6',
        }
      ],
      cost: '1.25'
    },
    {
      id: 'm2',
      name: 'Cream',
      to: [
        {
          id: 'd1'
        }
      ],
      cost: '0'
    },
    {
      id: 'm3',
      name: 'Milk',
      to: [
        {
          id: 'd1'
        }
      ],
      cost: '0'
    },
    {
      id: 'm4',
      name: 'Sugar',
      to: [
        {
          id: 'd1'
        }
      ],
      cost: '0'
    },
    {
      id: 'm5',
      name: 'Whipped Cream',
      to: [
        {
          id: 'd2'
        },
        {
          id: 'd5'
        }
      ],
      cost: '0.50'
    },
    {
      id: 'm6',
      name: 'Chocolate Syrup',
      to: [
        {
          id: 'd2'
        },
        {
          id: 'd5'
        },
        {
          id: 'd4'
        }
      ],
      cost: '0.75'
    },
    {
      id: 'm7',
      name: 'Strawberry Banana',
      to: [
        {
          id: 'd3'
        },
      ],
      cost: '0'
    },
    {
      id: 'm8',
      name: 'Mango',
      to: [
        {
          id: 'd3'
        },
      ],
      cost: '0'
    },
    {
      id: 'm9',
      name: 'Regular Syrup',
      to: [
        {
          id: 'd4'
        },
        {
          id: 'd6'
        },
        {
          id: 'd5'
        }
      ],
      cost: '0'
    },
    {
      id: 'm10',
      name: 'Soy Milk',
      to: [
        {
          id: 'd1'
        },
        {
          id: 'd2'
        },
        {
          id: 'd4'
        },
        {
          id: 'd5'
        }
      ],
      cost: '0'
    }
  ]
}
