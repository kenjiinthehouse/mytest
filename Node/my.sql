INSERT 
INTO `msgboard`
(`sid`,
`parnentId`,
`memberId`,
`nickname`,
`content`,
`upPoint`,
`downPoint`,
`accusePoint`,
`postTime`) 
VALUES (
  NULL,
  0,
  cast( floor(rand()*100000000) as int),
  'DVshu',
  '先吹一波吹上天！

感謝癌大的知識分享，讓小菜雞我面對近期美股波動，還能夠保持冷靜。',
  cast( floor(rand()*10000) as int),
  cast( floor(rand()*10000) as int),
  default,
  NOW()
  );

INSERT 
INTO `msgboard`
(`sid`,
`parnentId`,
`memberId`,
`nickname`,
`content`,
`upPoint`,
`downPoint`,
`accusePoint`,
`postTime`) 
VALUES (
  NULL,
  0,
  cast( floor(rand()*100000000) as int),
  '五歲喝啤酒',
  '想請問主委對台灣數位銀行未來是否看好？',
  cast( floor(rand()*10000) as int),
  cast( floor(rand()*10000) as int),
  default,
  NOW()
  );




