let shopProducts = [
    {category: 'teclado',
    products:[
        {id:'1',nombre:'Teclado gamer Redragon Shiva K512',precio: 38499,
        img1:'https://drive.google.com/uc?export=download&id=1FPZcsv_ZLsjGEBGlPqMS3prdeBe2ok3s',img2:'https://drive.google.com/uc?export=download&id=1wUDOCdj2tEItHg40r10JPjrtw1PLYLZH',img3:'https://drive.google.com/uc?export=download&id=1wX2yc4RKWvPhQz4b4SkJvxgw8Tq9bgJw'},
        {id:'2',nombre:'Teclado gamer T-Dagger Arena T-TGK321 QWERTY', precio: 29378,
        img1:'https://drive.google.com/uc?export=download&id=1NiJdT-7uuPfLNrFCHBslkAKwVvOV5ZEJ',img2:'https://drive.google.com/uc?export=download&id=1LlbHbUzzGFc8TBAceDYhUgf2JI5Nt9fM',img3:'https://drive.google.com/uc?export=download&id=13Ugg7ZiTZPAp1XQ9in4nI4Yq3HcrPx4F'},
        {id:'3',nombre:'Teclado Mecanico Wireless Keychron K2 Pro',precio: 152889,
        img1:'https://drive.google.com/uc?export=download&id=195U_K_46FFJuYpgM4IJVYsTzAZeBPn9B',img2:'https://drive.google.com/uc?export=download&id=1gktJdFAf4sRvt3DE0fxxVa-B6LgH3Bya',img3:'https://drive.google.com/uc?export=download&id=1mkn22ronwmttcYrR_My0iP1V_3_X2853'},
        {id:'4',nombre:'Teclado gamer HyperX Alloy Elite 2',precio:129195,
        img1:'https://drive.google.com/uc?export=download&id=1VBjIQZtGb8dIUZHTO0aTsDkwm03GLJZD',img2:'https://drive.google.com/uc?export=download&id=1JuEdQ-7iZOQ0aK0PBoQ9dN5eX5qRll-L',img3:'https://drive.google.com/uc?export=download&id=1C8V3YeJame3GueLJIAaHpv0O4S7acoOJ'}
    ]},
    {category: 'mouse',
    products:[
        {id:'5',nombre:'Mouse gamer Logitech G Series Lightsync G203',precio:31499,
        img1:'https://drive.google.com/uc?export=download&id=1Q_cJA3NtOqb1vn08aMCpy0kVURvUbn2n',img2:'https://drive.google.com/uc?export=download&id=1rMlVEl9AZ4-aAOnWhmEAgZ6qK5KqPVmG',img3:'https://drive.google.com/uc?export=download&id=1m6zqO-IfIY4Pm8VqlrW68L3UMLW4kLyn'},
        {id:'6',nombre:'Mouse gamer Redragon Griffin M607',precio:22212,
        img1:'https://drive.google.com/uc?export=download&id=1yBh5yWQPAbfFzjR9A30NCNPMQxqkfR_l',img2:'https://drive.google.com/uc?export=download&id=1wBLpf9OOTDB0zTLc2d6LTkZbhzqVa7X8',img3:'https://drive.google.com/uc?export=download&id=1dD3YMiwHbJhumsFUDH39J2jitlwNI6DH'},
        {id:'7',nombre:'Mouse gamer Razer DeathAdder V2 Mini',precio:50489,
        img1:'https://drive.google.com/uc?export=download&id=1E7guoF4qKa2fJX8o9ygalMvgQ2V_fGQn',img2:'https://drive.google.com/uc?export=download&id=1X3uVWQWrHM_ioi8RgZJmn5L40f7A7C7q',img3:'https://drive.google.com/uc?export=download&id=1B6vj_Pf3iOfefN2RhsW-7uLdCYUQzLno'},
        {id:'8',nombre:'Mouse Xinua M8 Gamer',precio:16569,
        img1:'https://drive.google.com/uc?export=download&id=1LfOCSMzb3Cf6NpTOeejbnjQH6_bHrL7C',img2:'https://drive.google.com/uc?export=download&id=1ZEEjzWET77JSOo1_icGKlwtyk8eoIvik',img3:'https://drive.google.com/uc?export=download&id=12NjkUQiqEJcYJlnoHnqmvFbUfJz-jDGR'}
    ]},
    {category: 'auricular',
    products:[
        {id:'9',nombre:'Auriculares inalámbricos HyperX Cloud Flight HX-HSCF',precio:82999,
        img1:'https://drive.google.com/uc?export=download&id=1bCcHfNGtfGAC2sIwRxBojNsRYzJT3uL0',img2:'https://drive.google.com/uc?export=download&id=1NPvFlr2MBHTitREAK_uUwhxP2aa1_JHY',img3:'https://drive.google.com/uc?export=download&id=1g71tPE2qB-sfvI5jtSVjHEdsY9guqhhu'},
        {id:'10',nombre:'Auriculares Trust Zamak GXT 414',precio:49999,
        img1:'https://drive.google.com/uc?export=download&id=1gFtdCdqMlgXdlfow2deqgxvpwD_J-PLW',img2:'https://drive.google.com/uc?export=download&id=1iiR899T9-Io7-gDkvte0PZOQwayj6oyE',img3:'https://drive.google.com/uc?export=download&id=1liyeG0sjX-DZqz9XPWRoP86M798JJrCh'},
        {id:'11',nombre:'Auriculares Razer Blackshark V2 X classic',precio:60295,
        img1:'https://drive.google.com/uc?export=download&id=1kL9_filPMCqq6Gzb97wSFApBqZsL5kZp',img2:'https://drive.google.com/uc?export=download&id=1j88BF5-7YTkILiuS38_EPZG6AfRfesQy',img3:'https://drive.google.com/uc?export=download&id=16IvDhMM_HlaBxM27e229wHFWvYe1F3M6'},
        {id:'12',nombre:'Auriculares Redragon Gamer Zeus X H510-RGB',precio:50729,
        img1:'https://drive.google.com/uc?export=download&id=1jzUXsuuKoEf1o0OhUsfhC5Mjduoorruw',img2:'https://drive.google.com/uc?export=download&id=1gbjDsqkRGygmeR6xicXieukWl9rjrgQk',img3:'https://drive.google.com/uc?export=download&id=1QFgRVVvPt4zM-BL-4TILR0uXUYTfebrP'}
    ]},
    {category: 'silla',
    products:[
        {id:'13',nombre:'Silla Gaming Nbx Ecocuero',precio:139999,
        img1:'https://drive.google.com/uc?export=download&id=1QIn-ezmzJyT3uqaGXAzEaBp7fU1vWGND',img2:'https://drive.google.com/uc?export=download&id=1vgix7i8fBbnYg40fU9iTqN5L8_ajxIxU',img3:'https://drive.google.com/uc?export=download&id=1Rwgv75GnRvvCZuTs5GzsLPlp22a9zXBa'},
        {id:'14',nombre:'Silla de escritorio Corsair T3 Rush',precio:368999,
        img1:'https://drive.google.com/uc?export=download&id=1RM8W71dqt_AzHoBxfnl25p_Xrw7IN_ky',img2:'https://drive.google.com/uc?export=download&id=1TBnyWO1IjBwGbIGAy7H3io3Hc7W8HEQs',img3:'https://drive.google.com/uc?export=download&id=1Ms-D9tJO2_dfRIxiW-S1uSzlby4NyXDi'},
        {id:'15',nombre:'Silla Vonne SV-G0 Cuero sintético',precio:178808,
        img1:'https://drive.google.com/uc?export=download&id=19xgFp7kvc4R0w3VXHjP9AnAWzpRa-_LP',img2:'https://drive.google.com/uc?export=download&id=1Naa2qDmRJk1Xo9DRXTJ_40KNB3eH1Kje',img3:'https://drive.google.com/uc?export=download&id=1TU37ZgTYyrcTrh7IEs8cPtBK77L6jxc1'},
        {id:'16',nombre:'Silla de escritorio Cougar Armor S',precio:272899,
        img1:'https://drive.google.com/uc?export=download&id=1WzbpznSRCknEWW9iIQKO281Dit9ogUqP',img2:'https://drive.google.com/uc?export=download&id=1Wpj-W5-fLN_UlAlSBuNHTqjZwX8U0t8p',img3:'https://drive.google.com/uc?export=download&id=1-_fiOLBngYFXMb9FdzfEaGvT6ID3mUzU'}
    ]},
    {category: 'portatil',
    products:[
        {id:'17',nombre:'Apple Macbook Air',precio:1369199,
        img1:'https://drive.google.com/uc?export=download&id=1QTA33fCy_--2-kn70JCUfS_pvCMnbCbZ',img2:'https://drive.google.com/uc?export=download&id=1X-K9MtDaSDKmMH0CeF32WlNa_8EDkztT',img3:'https://drive.google.com/uc?export=download&id=1BoPoQU1RvcxX7khDo-Z0LJRBCN1kPCLM'},
        {id:'18',nombre:'Notebook Asus',precio:549990,
        img1:'https://drive.google.com/uc?export=download&id=1rhe4xkfgZnc2vxZuJuI4pxFpIQTj_i65',img2:'https://drive.google.com/uc?export=download&id=1DRK07NjDI5ZsZRykgbCsH1TtB1niO8OY',img3:'https://drive.google.com/uc?export=download&id=1Zk_D5WBdgXSoXzsYBwIkd6vPdn4cdc0G'},
        {id:'19',nombre:'Samsung Galaxy Book3 15.6',precio:506999,
        img1:'https://drive.google.com/uc?export=download&id=1dhzfZfyY12GkAluXRZOS7SxgNxC1X6Zf',img2:'https://drive.google.com/uc?export=download&id=1BcZ26QET5IE4bQjN2WVig5QyMueh36rZ',img3:'https://drive.google.com/uc?export=download&id=1QfmamLJmrR_SYZX5pVxXeqSF2bCJDopq'},
        {id:'20',nombre:'Notebook Lenovo Ip 3 14alc6',precio:780999,
        img1:'https://drive.google.com/uc?export=download&id=13AVC1LWQnAXEKGnKIHWRGQ7mcDGaj4E2',img2:'https://drive.google.com/uc?export=download&id=1nay6V1KZOm7ID7aH-b0M0rsPYkcP27ER',img3:'https://drive.google.com/uc?export=download&id=1ZGV7DdKAuC9A-Fko837bE5xW2QxaVRAL'}
    ]},
    {category: 'camara',
    products:[
        {id:'21',nombre:'Cámara web Logitech C922 Pro Full HD 30FPS',precio:94879,
        img1:'https://drive.google.com/uc?export=download&id=1uZEPGthMvdSnL-nkqMtogILGa3g5NWmh',img2:'https://drive.google.com/uc?export=download&id=1xBQObY2vHL-j9J0NxmZbUtOPLudCRPdF',img3:'https://drive.google.com/uc?export=download&id=1r7A0e4xhydlgjVd_Ru2mtaq3fe0K2lnv'},
        {id:'22',nombre:'Cámara Web Gadnic 2k 4mp',precio:59999,
        img1:'https://drive.google.com/uc?export=download&id=1KGItR9s2_TTkljtmtkGqzMufU2IN6PmG',img2:'https://drive.google.com/uc?export=download&id=1sTZP-4_3JXvgCZ8HrdHRodB3cuygsKs9',img3:'https://drive.google.com/uc?export=download&id=14PfFyBS69oxR6ARAKnfRMMPFOqhcDT9m'},
        {id:'23',nombre:'Cámara web Microsoft LifeCam',precio:34991,
        img1:'https://drive.google.com/uc?export=download&id=130md2A0O4VaBqRRXcT84yfiR5RmkvZl9',img2:'https://drive.google.com/uc?export=download&id=1x2U_YgwTa430nVxJXA15gewvrgDllpdh',img3:'https://drive.google.com/uc?export=download&id=1FhsMAnp3rCujQ84sfk_wz5-3r-P5OxUM'},
        {id:'24',nombre:'Cámara Redragon Hitman GW800',precio:46206,
        img1:'https://drive.google.com/uc?export=download&id=1eOuECY-T6qS1pJDgcHEyaWATObsDeZRB',img2:'https://drive.google.com/uc?export=download&id=1JOqrxPPORUUqK3_-ZZ2vXHrWXRnbGVcX',img3:'https://drive.google.com/uc?export=download&id=1SiSCA2H_EGNc-P9TWqE56XSGfvzfIwO8'}
    ]},
    {category: 'tablet',
    products:[
        {id:'25',nombre:'Tablet Samsung Galaxy Tab A7 Lite',precio:110999,
        img1:'https://drive.google.com/uc?export=download&id=1fqY91vtZPONHabZCoI_DZ912GWY2wDQt',img2:'https://drive.google.com/uc?export=download&id=1uzziOWz08C1WnjdhxktQKmdNqt4j1V1s',img3:'https://drive.google.com/uc?export=download&id=1d-KXiTHNx78sZY-6Pn2Gls7NWiXM4tE3'},
        {id:'26',nombre:'Tablet Galaxy Tab A8',precio:189999,
        img1:'https://drive.google.com/uc?export=download&id=1KVxO6hacA1w8KWes4GHtV17Odqqc3upI',img2:'https://drive.google.com/uc?export=download&id=1JqQVCO3wi2rjfpngceV48MB_NK_DWJOO',img3:'https://drive.google.com/uc?export=download&id=1-7NfixnrdOMM78dG7qL5tmcTU9nLJJ4_'},
        {id:'27',nombre:'Tablet Gadnic 10',precio:139999,
        img1:'https://drive.google.com/uc?export=download&id=1VQE31aZoT3lmlWi-Leru9sIdKe-OEMHR',img2:'https://drive.google.com/uc?export=download&id=16dIOjLcSo9u0ucRrUFxQCww_8CBScNEm',img3:'https://drive.google.com/uc?export=download&id=1kTAwFg2JGU4PAyaGT5X6mhd5bC08Qv9u'},
        {id:'28',nombre:'Tablet Aiwa Tablet TA-10-464',precio:105599,
        img1:'https://drive.google.com/uc?export=download&id=1F8zN7WUnH77K0KIl0gdC3cNX6hElI0qK',img2:'https://drive.google.com/uc?export=download&id=1tLyZN3FYcr69zo-2RuuYSCPD8h0DzWSp',img3:'https://drive.google.com/uc?export=download&id=1mTgsOSkfa780IYC4PoJ_cJ3ZchDY29Hq'}
    ]},
    {category: 'monitor',
    products:[
        {id:'29',nombre:'Monitor Led Noblex Mk24x7100 23.8"',precio:97099,
        img1:'https://drive.google.com/uc?export=download&id=1N8TQ-4QMg8P6yQNlhv_FIYjYgQpsm3Qz',img2:'https://drive.google.com/uc?export=download&id=1ilrK0RAXqlOCJvIWXqJg_OMbOew34oKR',img3:'https://drive.google.com/uc?export=download&id=18sOTh2z-e6sZOi35_yn553nXCikEEuCI'},
        {id:'30',nombre:'Monitor Led Samsung 22"',precio:98888,
        img1:'https://drive.google.com/uc?export=download&id=106Vz55BdWtuxKyiUm-nUfqCKTO36XTKI',img2:'https://drive.google.com/uc?export=download&id=1V5w5-j8r1hIl5F7cpdg6hWYJHGJ7yapa',img3:'https://drive.google.com/uc?export=download&id=1Gm1kObP4ysRNKkifTaHNEP_E8v-s1Xlf'},
        {id:'31',nombre:'Monitor Hkc Antteq 23,8"',precio:95999,
        img1:'https://drive.google.com/uc?export=download&id=13MUiVKr2faVbGwyaVAbp0Ktqo7VuPJZS',img2:'https://drive.google.com/uc?export=download&id=1Mm9DrjrUHepAq7fraPUTJRdR8J99uA47',img3:'https://drive.google.com/uc?export=download&id=1xQSH650bHtrT_ZCxVnyT8r7QCyLbw4W7'},
        {id:'32',nombre:'Monitor gamer Asus VA27EHE 27"',precio:193990,
        img1:'https://drive.google.com/uc?export=download&id=19ebPD8Lu4XCA2KGxdHHsX7-sM8ZQ0Q67',img2:'https://drive.google.com/uc?export=download&id=1uC1gjVvQjRBMkFNpLsywLKKiJJRhshlB',img3:'https://drive.google.com/uc?export=download&id=11eIIpLVfpCmPaY8YRRuyI_nUZyjJy3OF'}
    ]}
]


export const productFetch = ()=>{
    return new Promise((res) => {
        setTimeout(()=>{
            res(shopProducts)
        },1500)
    })
}