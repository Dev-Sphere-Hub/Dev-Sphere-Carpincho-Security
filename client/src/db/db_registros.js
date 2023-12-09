const personas = [
  {
    id: '8a674e7d-8fc4-4f4f-8eb1-7a9c1c3129e1',
    imagen: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1701381197/carpincho/2cf02024-3b12-478d-9fdf-998858aeaaee_zdvbm9.webp',
    estado: 'aprobado',
    fechaPublicacion: '2023-12-03T12:00:00Z',
    categoria: 'ingreso',
    tipo: 'aaa'
  },
  {
    id: 'a2c9e1f8-5b7d-4e2c-a3e0-2b8f01c36442',
    imagen: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1701381196/carpincho/portrait_of_a_cartoon_capybara_with_sunglasses_and_1_y9sq8m.jpg',
    estado: 'rechazado',
    fechaPublicacion: '2023-12-02T15:30:00Z',
    categoria: 'egreso',
    tipo: 'b'
  },
  {
    id: '3bd28a91-6524-4c13-bc3e-8e3a15e65c3f',
    imagen: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1701381200/carpincho/3566bd6a-e306-48b5-a966-a9c4202d148d_senrck.webp',
    estado: 'reportado',
    fechaPublicacion: '2023-12-01T09:45:00Z',
    categoria: 'reporte',
    tipo: 'c'
  },
  {
    id: '6e59b6cf-0eb9-4d7f-8f04-2576b4c9d41a',
    imagen: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1701381197/carpincho/portrait_of_a_cartoon_capybara_with_sunglasses_and_5_mvjldf.jpg',
    estado: 'aprobado',
    fechaPublicacion: '2023-11-30T18:20:00Z',
    categoria: 'ingreso',
    tipo: 'a'
  },
  {
    id: 'fe3022db-b40d-45f3-bf32-68a1ff6e5c1a',
    imagen: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1701381199/carpincho/portrait_of_a_cartoon_capybara_with_sunglasses_and_6_oboesw.jpg',
    estado: 'rechazado',
    fechaPublicacion: '2023-11-29T11:10:00Z',
    categoria: 'egreso',
    tipo: 'b'
  },
  {
    id: '917fd524-41e4-4713-80fc-bfc586b57664',
    imagen: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1701381196/carpincho/portrait_of_a_cartoon_capybara_with_sunglasses_and_4_rtg0cp.jpg',
    estado: 'aprobado',
    fechaPublicacion: '2023-11-28T14:55:00Z',
    categoria: 'ingreso',
    tipo: 'bbb'
  },
  {
    id: 'e9011d49-6654-498b-a109-826e1c8a6315',
    imagen: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1701381196/carpincho/portrait_of_a_cartoon_capybara_with_sunglasses_and_3_y1w2zi.jpg',
    estado: 'reportado',
    fechaPublicacion: '2023-11-27T08:30:00Z',
    categoria: 'reporte',
    tipo: 'c'
  },
  {
    id: '6e59b6cf-0eb9-4d7f-8fg4-2576b4c9d41a',
    imagen: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1701381197/carpincho/portrait_of_a_cartoon_capybara_with_sunglasses_and_5_mvjldf.jpg',
    estado: 'aprobado',
    fechaPublicacion: '2023-11-30T18:20:00Z',
    categoria: 'ingreso',
    tipo: 'a'
  },
  {
    id: 'fe3022db-b40d-45f3-bfg2-68a1ff6e5c1a',
    imagen: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1701381199/carpincho/portrait_of_a_cartoon_capybara_with_sunglasses_and_6_oboesw.jpg',
    estado: 'rechazado',
    fechaPublicacion: '2023-11-29T11:10:00Z',
    categoria: 'egreso',
    tipo: 'b'
  },
  {
    id: '917fd524-41e4-4713-80ac-bfc586b57664',
    imagen: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1701381196/carpincho/portrait_of_a_cartoon_capybara_with_sunglasses_and_4_rtg0cp.jpg',
    estado: 'aprobado',
    fechaPublicacion: '2023-11-28T14:55:00Z',
    categoria: 'ingreso',
    tipo: 'a'
  },
  {
    id: 'e9011d49-6654-49ss-a1s9-826e1c8a6315',
    imagen: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1701381196/carpincho/portrait_of_a_cartoon_capybara_with_sunglasses_and_3_y1w2zi.jpg',
    estado: 'reportado',
    fechaPublicacion: '2023-11-27T08:30:00Z',
    categoria: 'reporte',
    tipo: 'cccc'
  },
  {
    id: '6e59b6cf-0eb9-4d77-8fg4-2576b4c9d41a',
    imagen: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1701381197/carpincho/portrait_of_a_cartoon_capybara_with_sunglasses_and_5_mvjldf.jpg',
    estado: 'aprobado',
    fechaPublicacion: '2023-11-30T18:20:00Z',
    categoria: 'ingreso',
    tipo: 'a'
  },
  {
    id: 'fe3022db-b40d-45f4-bfg2-68a1ff6e5c1a',
    imagen: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1701381199/carpincho/portrait_of_a_cartoon_capybara_with_sunglasses_and_6_oboesw.jpg',
    estado: 'rechazado',
    fechaPublicacion: '2023-11-29T11:10:00Z',
    categoria: 'egreso',
    tipo: 'b'
  },
  {
    id: '917fd524-41e4-4723-80ac-bfc586b57664',
    imagen: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1701381196/carpincho/portrait_of_a_cartoon_capybara_with_sunglasses_and_4_rtg0cp.jpg',
    estado: 'aprobado',
    fechaPublicacion: '2023-11-28T14:55:00Z',
    categoria: 'ingreso',
    tipo: 'a'
  },
  {
    id: 'e9011d49-6654-498b-a11a-826e1c8a6315',
    imagen: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1701381196/carpincho/portrait_of_a_cartoon_capybara_with_sunglasses_and_3_y1w2zi.jpg',
    estado: 'reportado',
    fechaPublicacion: '2023-11-27T08:30:00Z',
    categoria: 'reporte',
    tipo: 'c'
  }
]

export default personas
