import React, { useState } from 'react';
import './Faq.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="question-box" onClick={() => setIsOpen(!isOpen)}>
        <h4>{question}</h4>
        <div className={`arrow ${isOpen ? 'up' : 'down'}`}>&#9660;</div>
      </div>
      {isOpen && (
        <div className="answer-box">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  const faqData = [
    {
      question: 'Como a automação residencial pode melhorar minha vida diária?',
      answer: 'A automação residencial pode melhorar sua vida diária proporcionando conveniência e eficiência. Você pode controlar dispositivos, como iluminação, termostatos e sistemas de segurança, com facilidade, tornando sua casa mais inteligente e adaptada ao seu estilo de vida.'
    },
    {
      question: 'É difícil instalar sistemas de automação residencial?',
      answer: 'Não necessariamente. Muitos sistemas de automação residencial são projetados para serem intuitivos e fáceis de instalar. No entanto, a complexidade pode variar com base nas funcionalidades desejadas. É recomendável contar com profissionais para instalações mais avançadas.'
    },
    {
      question: 'Como a automação residencial contribui para a segurança da minha casa?',
      answer: 'A automação residencial contribui para a segurança oferecendo recursos como câmeras de vigilância, sensores de movimento e sistemas de monitoramento. Você pode receber alertas em tempo real e acessar câmeras remotamente para garantir a segurança da sua casa.'
    },
    {
      question: 'Quais são os benefícios de um sistema de controle por voz?',
      answer: 'Um sistema de controle por voz, como o Alexa ou Google Assistant, permite que você controle dispositivos apenas com comandos de voz. Isso proporciona conveniência adicional e é especialmente útil para pessoas com mobilidade reduzida.'
    },
    {
      question: 'Os sistemas de automação residencial consomem muita energia?',
      answer: 'Na verdade, muitos sistemas de automação residencial são projetados para serem eficientes em termos de energia. Ao automatizar o controle de iluminação e temperatura, por exemplo, você pode otimizar o consumo de energia e reduzir os custos ao longo do tempo.'
    },
    {
      question: 'Posso integrar sistemas de automação residencial existentes na minha casa?',
      answer: 'Sim, em muitos casos. Muitos sistemas de automação residencial são projetados para serem compatíveis e podem ser integrados a dispositivos existentes. No entanto, é sempre recomendável verificar a compatibilidade antes da integração.'
    },
    {
        question: 'Quanto tempo dura a instalação de um sistema de automação residencial completa?',
        answer: 'A duração da instalação pode variar dependendo da complexidade do sistema e do tamanho da residência. Instalações simples podem levar algumas horas, enquanto instalações mais avançadas podem exigir vários dias. Consulte um profissional para obter uma estimativa mais precisa.'
      },
  ];

  return (
    <div className="faq" id='perguntas-frequentes'>
      <h3>Perguntas Frequentes (FAQ)</h3>

      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default Faq;
