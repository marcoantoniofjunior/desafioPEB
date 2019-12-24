--
-- PostgreSQL database dump
--

-- Dumped from database version 12.0
-- Dumped by pg_dump version 12.0

-- Started on 2019-12-24 13:48:43 -03

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
-- TOC entry 207 (class 1259 OID 16791)
-- Name: agendamentos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.agendamentos (
    idagendamento integer NOT NULL,
    idpaciente integer NOT NULL,
    dataagendamentoconsulta date,
    dataconsulta date
);


ALTER TABLE public.agendamentos OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 16789)
-- Name: agendamentos_idagendamento_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.agendamentos_idagendamento_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.agendamentos_idagendamento_seq OWNER TO postgres;

--
-- TOC entry 3227 (class 0 OID 0)
-- Dependencies: 206
-- Name: agendamentos_idagendamento_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.agendamentos_idagendamento_seq OWNED BY public.agendamentos.idagendamento;


--
-- TOC entry 210 (class 1259 OID 16811)
-- Name: anotacoesconsulta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.anotacoesconsulta (
    idanotacao integer NOT NULL,
    idconsulta integer NOT NULL,
    descricao character varying
);


ALTER TABLE public.anotacoesconsulta OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16809)
-- Name: anotacoesconsulta_idanotacao_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.anotacoesconsulta_idanotacao_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.anotacoesconsulta_idanotacao_seq OWNER TO postgres;

--
-- TOC entry 3228 (class 0 OID 0)
-- Dependencies: 209
-- Name: anotacoesconsulta_idanotacao_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.anotacoesconsulta_idanotacao_seq OWNED BY public.anotacoesconsulta.idanotacao;


--
-- TOC entry 203 (class 1259 OID 16631)
-- Name: pacientes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pacientes (
    idpaciente integer NOT NULL,
    nome character varying(200) NOT NULL,
    telefone character varying(20),
    datanascimento date,
    altura numeric(6,2),
    peso numeric(6,2),
    sexo character varying(10)
);


ALTER TABLE public.pacientes OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 16802)
-- Name: consultas; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public.consultas AS
 SELECT pac.idpaciente,
    pac.nome,
    age.idagendamento,
    age.dataconsulta
   FROM (public.agendamentos age
     JOIN public.pacientes pac ON ((pac.idpaciente = age.idpaciente)))
  ORDER BY age.dataconsulta, pac.nome, age.dataagendamentoconsulta;


ALTER TABLE public.consultas OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 16629)
-- Name: pacientes_idpaciente_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pacientes_idpaciente_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pacientes_idpaciente_seq OWNER TO postgres;

--
-- TOC entry 3229 (class 0 OID 0)
-- Dependencies: 202
-- Name: pacientes_idpaciente_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pacientes_idpaciente_seq OWNED BY public.pacientes.idpaciente;


--
-- TOC entry 205 (class 1259 OID 16639)
-- Name: statusagendamento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.statusagendamento (
    idstatus integer NOT NULL,
    descricao character varying
);


ALTER TABLE public.statusagendamento OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16637)
-- Name: statusagendamento_idstatus_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.statusagendamento_idstatus_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.statusagendamento_idstatus_seq OWNER TO postgres;

--
-- TOC entry 3230 (class 0 OID 0)
-- Dependencies: 204
-- Name: statusagendamento_idstatus_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.statusagendamento_idstatus_seq OWNED BY public.statusagendamento.idstatus;


--
-- TOC entry 3083 (class 2604 OID 16794)
-- Name: agendamentos idagendamento; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.agendamentos ALTER COLUMN idagendamento SET DEFAULT nextval('public.agendamentos_idagendamento_seq'::regclass);


--
-- TOC entry 3084 (class 2604 OID 16814)
-- Name: anotacoesconsulta idanotacao; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.anotacoesconsulta ALTER COLUMN idanotacao SET DEFAULT nextval('public.anotacoesconsulta_idanotacao_seq'::regclass);


--
-- TOC entry 3081 (class 2604 OID 16634)
-- Name: pacientes idpaciente; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pacientes ALTER COLUMN idpaciente SET DEFAULT nextval('public.pacientes_idpaciente_seq'::regclass);


--
-- TOC entry 3082 (class 2604 OID 16642)
-- Name: statusagendamento idstatus; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.statusagendamento ALTER COLUMN idstatus SET DEFAULT nextval('public.statusagendamento_idstatus_seq'::regclass);


--
-- TOC entry 3090 (class 2606 OID 16796)
-- Name: agendamentos agendamentos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.agendamentos
    ADD CONSTRAINT agendamentos_pkey PRIMARY KEY (idagendamento);


--
-- TOC entry 3092 (class 2606 OID 16819)
-- Name: anotacoesconsulta anotacoesconsulta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.anotacoesconsulta
    ADD CONSTRAINT anotacoesconsulta_pkey PRIMARY KEY (idanotacao);


--
-- TOC entry 3086 (class 2606 OID 16636)
-- Name: pacientes pacientes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pacientes
    ADD CONSTRAINT pacientes_pkey PRIMARY KEY (idpaciente);


--
-- TOC entry 3088 (class 2606 OID 16647)
-- Name: statusagendamento statusagendamento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.statusagendamento
    ADD CONSTRAINT statusagendamento_pkey PRIMARY KEY (idstatus);


--
-- TOC entry 3093 (class 2606 OID 16797)
-- Name: agendamentos agendamentos_idpaciente_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.agendamentos
    ADD CONSTRAINT agendamentos_idpaciente_fkey FOREIGN KEY (idpaciente) REFERENCES public.pacientes(idpaciente);


--
-- TOC entry 3094 (class 2606 OID 16820)
-- Name: anotacoesconsulta anotacoes_consulta_idconsulta_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.anotacoesconsulta
    ADD CONSTRAINT anotacoes_consulta_idconsulta_fkey FOREIGN KEY (idconsulta) REFERENCES public.agendamentos(idagendamento);


-- Completed on 2019-12-24 13:48:45 -03

--
-- PostgreSQL database dump complete
--

