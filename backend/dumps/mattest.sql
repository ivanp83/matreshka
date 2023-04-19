--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: about; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.about (
    id integer NOT NULL,
    name character varying(100),
    data text,
    page_id integer NOT NULL
);


ALTER TABLE public.about OWNER TO postgres;

--
-- Name: about_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.about ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.about_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: carts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.carts (
    id bigint NOT NULL,
    customer_id bigint,
    cart_items jsonb,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.carts OWNER TO postgres;

--
-- Name: carts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.carts ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.carts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(100),
    description text,
    image character varying(255) NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    image_big character varying(255)
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.categories ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.categories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: customers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customers (
    id bigint NOT NULL,
    telegram_id bigint,
    username character varying(255),
    first_name character varying(255) NOT NULL,
    last_name character varying(255),
    token character varying(255) NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    phone character varying(20)
);


ALTER TABLE public.customers OWNER TO postgres;

--
-- Name: customers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.customers ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.customers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: images; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.images (
    id integer NOT NULL,
    product_id integer,
    page_id integer,
    small character varying(255) NOT NULL,
    big character varying(255) NOT NULL
);


ALTER TABLE public.images OWNER TO postgres;

--
-- Name: images_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.images ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.images_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    shipping_address jsonb,
    order_items jsonb,
    yookassa_id text,
    amount bigint,
    currency character varying(10),
    customer_id integer,
    order_status character varying(20),
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.orders ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.orders_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: pages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages (
    id integer NOT NULL
);


ALTER TABLE public.pages OWNER TO postgres;

--
-- Name: pages_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.pages ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.pages_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    description text NOT NULL,
    price integer NOT NULL,
    category_id integer NOT NULL
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.products ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.products_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: about; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.about (id, name, data, page_id) FROM stdin;
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.carts (id, customer_id, cart_items, created_at) FROM stdin;
4	743459783	[]	2023-03-16 19:53:23.118152
2	6075580541	[]	2023-03-07 19:18:48.226809
1	1294200727	[]	2023-03-07 19:18:27.414097
6	1898444183	[]	2023-03-16 23:29:02.411438
9	1974802813	[]	2023-03-29 15:41:56.152276
7	1330982828	[]	2023-03-20 23:20:46.561556
10	2112394736	[]	2023-04-02 22:14:21.570596
3	526244481	[]	2023-03-09 18:47:08.958689
5	1047538424	[]	2023-03-16 21:09:02.531603
8	290356050	[]	2023-03-22 22:55:04.79533
11	229677361	[{"id": 81, "big": "images/1680335650648/1200.jpg", "name": "Клубничный зефир ", "price": 6500, "small": "images/1680335650648/600.jpg", "page_id": null, "quantity": 1, "product_id": 81, "category_id": 5, "description": "Кустовая Роза Сильва \\nЭустома \\nРанункулюсы "}]	2023-04-02 22:28:31.68887
12	5130061261	[]	2023-04-05 23:29:18.200014
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (id, name, description, image, created_at, image_big) FROM stdin;
11	Растения 	Растения способные создать ваши собственные зеленые джунгли дома 	images/1678959147508/600.jpg	2023-03-09 19:02:12.399784	\N
13	Интерьерные композиции 	Украшение вашего пространства это не только букет, наши флористы создают эксклюзивные композиции которые станут настоящими арт объектами в вашем интерьере. 	images/1678959623421/300.jpg	2023-03-16 12:40:24.20597	\N
14	Витрина готовых букетов 	В этой категории вы можете заказать уже собранный букет, который сразу отправится на доставку 	images/1679635104880/600.jpg	2023-03-24 08:16:01.89644	\N
4	Дуо	Букеты и композиции в состав которых входит две разновидности цветов 	images/1678188793836/600.jpg	2023-03-02 20:10:37.853521	\N
5	Авторские букеты 	Букеты и композиции состоящие из сборного состава цветов 	images/1678189234294/600.jpg	2023-03-03 17:56:09.596918	\N
6	Моно букет 	Букеты состоящие из одной позиции цветов 	images/1678377785104/600.jpg	2023-03-03 19:26:42.893758	\N
7	Корзины, шляпные коробки 	Букеты и композиции собранные с использованием флористической губки 	images/1678189390402/300.jpg	2023-03-07 14:43:10.79884	\N
\.


--
-- Data for Name: customers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customers (id, telegram_id, username, first_name, last_name, token, created_at, phone) FROM stdin;
1	1294200727	eachpw	Ivan	\N	1294200727:c524870e54de34043f99f910a4f738707c36a7f54220e89da4be393c16182f65	2023-03-07 19:00:07.283558	\N
2	6075580541	\N	Ivan	\N	6075580541:4cc0374a6f56526fbd63bd5bea4170802b3028d06e09de15b642f3e294482d7f	2023-03-07 19:00:33.626687	\N
3	526244481	YulianaLegkodumova	Yuliana	\N	526244481:662914a2371593250a01b117827fbbc0a4f549e33452cb3e798b54b6f97ba23f	2023-03-09 18:47:08.954664	\N
4	743459783	\N	Мари	\N	743459783:35124ebdd2ac0cdfddee4e0e3a70637a7b64bc44c315117548a244df3353a2dc	2023-03-16 19:53:23.114063	\N
5	1047538424	annacurreri	Anna	\N	1047538424:55e9ef9f7983bb0a7039fc7d41396535da74cca0dae23cd7fbf7418bda6356e3	2023-03-16 21:09:02.529085	\N
6	1898444183	kristinochka_rosenfeld	Kristinochka	\N	1898444183:8d318134b7f26ed27237640c6f45625430a517374791888e24386e3073bc7311	2023-03-16 23:29:02.405693	\N
7	1330982828	JulyaZay	Юлия	\N	1330982828:9ef2cc749520c49208f47f4b91bb8ac33552ec998a9a7caea10ebe938dbfa34a	2023-03-20 23:20:46.556786	\N
8	290356050	\N	Anna	\N	290356050:76d5d0472d36a07edd0a712eb82c9df0320c7427132c6811a638b2fc07408fd6	2023-03-22 22:55:04.792077	\N
9	1974802813	artur_bikmaev	Артур	\N	1974802813:3a42fba3d05f255ba4c3c8fcf69a2d0a248fb13fdeb6eac19168dc948f2eec9f	2023-03-29 15:41:56.14749	\N
10	2112394736	\N	OlgaP	\N	2112394736:c7c350528c4a833aa62a00f6892a44d11010f1c56152e79117be0b7797001b10	2023-04-02 22:14:21.565132	\N
11	229677361	show_me_u_face	Shogun	\N	229677361:40a1846f3af19c7976677a024c89ec570936ae654d59ac3128bf20f4abbe91db	2023-04-02 22:28:31.687002	\N
12	5130061261	elenka3925	Elenka	\N	5130061261:6763b25780af9d0c2b7f6e5642f90e8ce8dd2775e1fc35ed0392bd9c67e5f793	2023-04-05 23:29:18.195508	\N
13	\N	\N	фвывфвы	фыфыв	фвывфвы	2023-04-17 12:42:01.353555	33333333333
\.


--
-- Data for Name: images; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.images (id, product_id, page_id, small, big) FROM stdin;
44	44	\N	images/1678359046068/600.jpg	images/1678359046068/1200.jpg
46	46	\N	images/1678359235689/600.jpg	images/1678359235689/1200.jpg
54	54	\N	images/1678526976207/600.jpg	images/1678526976207/1200.jpg
53	53	\N	images/1678958987913/600.jpg	images/1678958987913/1200.jpg
56	56	\N	images/1678959775253/600.jpg	images/1678959775253/1200.jpg
57	57	\N	images/1678959926556/600.jpg	images/1678959926556/1200.jpg
58	58	\N	images/1678960061476/600.jpg	images/1678960061476/1200.jpg
59	59	\N	images/1678960166153/600.jpg	images/1678960166153/1200.jpg
60	60	\N	images/1678960305653/600.jpg	images/1678960305653/1200.jpg
61	61	\N	images/1678960598861/600.jpg	images/1678960598861/1200.jpg
62	62	\N	images/1679062187081/600.jpg	images/1679062187081/1200.jpg
63	63	\N	images/1679062331409/600.jpg	images/1679062331409/1200.jpg
64	64	\N	images/1679062449165/600.jpg	images/1679062449165/1200.jpg
65	65	\N	images/1679062675226/600.jpg	images/1679062675226/1200.jpg
66	66	\N	images/1679062895089/600.jpg	images/1679062895089/1200.jpg
67	67	\N	images/1679062987267/600.jpg	images/1679062987267/1200.jpg
68	68	\N	images/1679063123453/600.jpg	images/1679063123453/1200.jpg
69	69	\N	images/1679063280738/600.jpg	images/1679063280738/1200.jpg
70	70	\N	images/1679314496345/600.jpg	images/1679314496345/1200.jpg
71	71	\N	images/1679405659195/600.jpg	images/1679405659195/1200.jpg
72	72	\N	images/1679493316733/600.jpg	images/1679493316733/1200.jpg
73	73	\N	images/1679493530699/600.jpg	images/1679493530699/1200.jpg
74	74	\N	images/1679493613708/600.jpg	images/1679493613708/1200.jpg
75	75	\N	images/1679565823220/600.jpg	images/1679565823220/1200.jpg
76	76	\N	images/1679566312862/600.jpg	images/1679566312862/1200.jpg
77	77	\N	images/1679567818220/600.jpg	images/1679567818220/1200.jpg
80	80	\N	images/1680335537585/600.jpg	images/1680335537585/1200.jpg
81	81	\N	images/1680335650648/600.jpg	images/1680335650648/1200.jpg
82	82	\N	images/1680336462132/600.jpg	images/1680336462132/1200.jpg
83	83	\N	images/1680774344034/600.jpg	images/1680774344034/1200.jpg
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (id, shipping_address, order_items, yookassa_id, amount, currency, customer_id, order_status, created_at) FROM stdin;
1	{"zip": "2332", "city": "Калининград", "address": "23dew"}	[{"id": 53, "big": "images/1678958987913/1200.jpg", "name": "Ранункулюсы -незабудки ", "price": 10600, "small": "images/1678958987913/600.jpg", "page_id": null, "quantity": 3, "product_id": 53, "category_id": 4, "description": "Нежные ранункулюсы, цвета летнего заката в сочетании с небесными незабудками "}, {"id": 44, "big": "images/1678359046068/1200.jpg", "name": "Монстера деликатесная ", "price": 10000, "small": "images/1678359046068/600.jpg", "page_id": null, "quantity": 1, "product_id": 44, "category_id": 11, "description": "Вырастает до 3-е метров в длину. Размер листа до 35 см, цветет 1 раз в год. "}]	2bcf2e5e-000f-5000-9000-1f55271d5a01	41800	RUB	13	succeeded	2023-04-17 13:08:30.028396
\.


--
-- Data for Name: pages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages (id) FROM stdin;
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, name, description, price, category_id) FROM stdin;
61	Сборный букет 	Набор праздник. Диантус, герберы, розы и персиковый антуриум 	8500	5
62	101 Роза 	Невероятная коробка с wow эффектом. Не оставит равнодушным ни одного получателя. Роскошный букет для особенного человека 	25340	7
63	Лукошко с нарциссами 	Жёлтые солнечные нарциссы. Распускаются и цветут у вас на глазах. Прекрасная альтернатива срезаниям цветам. 	3500	13
64	Дуо из пионовидной розы 	Розы цвета тоффи со сладким ароматом словно кружевные конфеты, так и хочется съесть этот букет. 	2000	4
65	Букет белые кружева 	Эустома\nРоза плая бланка\nДиантус\nМаттиола \n	4500	5
66	Дуо из кустовой розы Джульетта 	Премиальная Кустовая Роза Джульетта \nВибурнум 	5000	4
67	Радужная гипсофила 	Цветная гипсофила 	5000	7
68	Букет Анна 	Кустовая роза\nДиантус \nТанацетум 	3000	5
69	Моно из ирисов 	Ирис синый - 50 шт	3250	6
70	Тюльпаны по шт 	Разные по цвету и фактуре тюльпаны, можно купить поштучно в любом количестве. \nВ наличии есть тюльпаны с обычным и махровым раскрытием 	100	6
71	Моно из лилий 	Белоснежный букет из 5 королевских лилий. 	2750	6
72	Корзина из роз Сильва с эвкалиптом 	Роскошные ветки кустовой розы Сильва (20 шт) в сочетании с итальянским эвкалиптом 	13200	7
73	Корзина роз Мадам Бомбастик 	Кустовая Роза Мадам бомбастик 	7300	7
74	Моно из ароматных гиацинтов 	Гиацинт 15 шт 	2950	6
75	Букет Лаура 	Хризантема Момока \nГениста \nТюльпаны	4000	5
76	Сансевиерия 	Растение не пересажено, высота 50см	1500	11
77	Моно из гортензий 	Гортензии 7 шт	6650	6
80	Корзина радужной гипсофилы 	Крашенная  гипсофила 	7500	7
81	Клубничный зефир 	Кустовая Роза Сильва \nЭустома \nРанункулюсы 	6500	5
82	Букет Виктория 	Гортензия \nГиниста\nЦимбидиум \nКустовая роза\nЭустома \nЭвкалипт 	5400	5
83	Моно букет из фрезии	Фрезия 50 шт	5750	6
60	Монстера манки 	Неприхотливая, интересная и такая дикая Лиана -монстера Манки. Растение не пересажено 	200	11
44	Монстера деликатесная 	Вырастает до 3-е метров в длину. Размер листа до 35 см, цветет 1 раз в год. 	10000	11
54	Букет альстромерий 	Стойкие цветы соцветие которых похоже на бабочку 	4500	6
46	Фикус 	Крупнолистное растение, высотой до 3 метров. 	12000	11
53	Ранункулюсы -незабудки 	Нежные ранункулюсы, цвета летнего заката в сочетании с небесными незабудками 	10600	4
56	Композиция весна 	Нарциссы в сочетании с итальянской мимозой, закрепленные в керамическом кашпо на флористической губке 	3500	13
57	Дикие ветви 	Ветки кориллиса, итальянский эвкалипт и антуриум цвета молодого вина. 	6000	13
58	Моно из альстромерии  	Белоснежная эквадорская альстромерия 	3000	6
59	Дуо из кустовой розы и ромашки 	Мелкая ромашка танацетум и кустовая нежная Роза, стойкое сочетание невероятной нежности 	3000	4
\.


--
-- Name: about_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.about_id_seq', 1, false);


--
-- Name: carts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.carts_id_seq', 12, true);


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_id_seq', 14, true);


--
-- Name: customers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.customers_id_seq', 13, true);


--
-- Name: images_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.images_id_seq', 83, true);


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_id_seq', 1, true);


--
-- Name: pages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pages_id_seq', 1, false);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 83, true);


--
-- Name: about about_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.about
    ADD CONSTRAINT about_pkey PRIMARY KEY (id);


--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY (id);


--
-- Name: categories categories_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_name_key UNIQUE (name);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: customers customers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (id);


--
-- Name: customers customers_telegram_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_telegram_id_key UNIQUE (telegram_id);


--
-- Name: customers customers_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_username_key UNIQUE (username);


--
-- Name: images images_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_pkey PRIMARY KEY (id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: pages pages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages
    ADD CONSTRAINT pages_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: carts carts_customer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customers(telegram_id) ON DELETE CASCADE;


--
-- Name: about fk_author; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.about
    ADD CONSTRAINT fk_author FOREIGN KEY (page_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: images images_page_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_page_id_fkey FOREIGN KEY (page_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: images images_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON DELETE CASCADE;


--
-- Name: orders orders_customer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customers(id) ON DELETE CASCADE;


--
-- Name: products products_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id) ON DELETE CASCADE;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: pg_database_owner
--

GRANT ALL ON SCHEMA public TO admin;


--
-- Name: TABLE about; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.about TO admin;


--
-- Name: TABLE carts; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.carts TO admin;


--
-- Name: TABLE categories; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.categories TO admin;


--
-- Name: TABLE customers; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.customers TO admin;


--
-- Name: TABLE images; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.images TO admin;


--
-- Name: TABLE orders; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.orders TO admin;


--
-- Name: TABLE pages; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.pages TO admin;


--
-- Name: TABLE products; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.products TO admin;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: public; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES  TO admin;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: public; Owner: admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE admin IN SCHEMA public GRANT ALL ON TABLES  TO admin;


--
-- PostgreSQL database dump complete
--

