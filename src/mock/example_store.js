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
      name: 'Frap',
      cost: '3'
    },
    {
      id: 'd5',
      name: 'Cap',
      cost: '3'
    }
  ],
  modifications: [
    {
      id: 'm1',
      name: 'Cream',
      to: [
        {
          id: 'd1'
        }
      ],
      cost: '0'
    },
    {
      id: 'm2',
      name: 'Milk',
      to: [
        {
          id: 'd1'
        }
      ],
      cost: '0'
    },
    {
      id: 'm3',
      name: 'Sugar',
      to: [
        {
          id: 'd1'
        }
      ],
      cost: '0'
    },
    {
      id: 'm4',
      name: 'Whipped Cream',
      to: [
        {
          id: 'd2'
        }
      ],
      cost: '0.50'
    },
    {
      id: 'm5',
      name: 'Chocolate Syrup',
      to: [
        {
          id: 'd2'
        }
      ],
      cost: '0.75'
    }
  ]
}
