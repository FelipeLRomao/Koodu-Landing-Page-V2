import { useState } from "react";
import { WHATSAPP } from "../data";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [f, setF] = useState({ nome: "", email: "", tel: "", tipo: "Site institucional" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    // Troque por sua API / CRM. Por enquanto abre o WhatsApp com os dados.
    const msg = `Olá Koodu! Sou ${f.nome} (${f.email}, ${f.tel}). Quero um orçamento para: ${f.tipo}.`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  };

  if (sent)
    return (
      <div className="ok">
        <b>Recebemos seu pedido.</b>
        <p style={{ marginTop: 8, color: "#B9BFDC" }}>Nossa equipe entra em contato em breve.</p>
      </div>
    );

  return (
    <form className="form" onSubmit={submit}>
      <label>Nome<input required value={f.nome} onChange={set("nome")} placeholder="Seu nome" /></label>
      <label>E-mail<input required type="email" value={f.email} onChange={set("email")} placeholder="voce@empresa.com.br" /></label>
      <label>WhatsApp<input required type="tel" value={f.tel} onChange={set("tel")} placeholder="(11) 90000-0000" /></label>
      <label>O que você precisa?
        <select value={f.tipo} onChange={set("tipo")}>
          <option>Site institucional</option>
          <option>Loja virtual</option>
          <option>Landing page</option>
          <option>SEO & Performance</option>
          <option>Outro</option>
        </select>
      </label>
      <button className="btn" type="submit" style={{ marginTop: 10 }}>Solicitar orçamento</button>
      <small>Seus dados não serão compartilhados.</small>
    </form>
  );
}