import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Menu, X, ArrowRight, ArrowUpRight, Star, ShieldCheck, Calculator,
  FileText, Building2, ReceiptText, ClipboardCheck, BriefcaseBusiness,
  Phone, MapPin, MessageCircle, Check, Sparkles, ExternalLink, Clock3,
  Handshake, Landmark, BookOpenCheck, BadgeCheck, ChartNoAxesCombined,
  Mail, ChevronRight
} from 'lucide-react';
import { BUSINESS, DEMO_MODE, DIRECTIONS_URL, GOOGLE_REVIEWS_URL, MAP_EMBED_URL } from './config';

const services = [
 {icon:Calculator,title:'Accounting Services',desc:'Organised financial records and accounting support for individuals and businesses.',items:['Financial Accounting','Bookkeeping','Financial Statements','Account Reconciliation']},
 {icon:Building2,title:'Company Incorporation',desc:'Assistance with business setup, incorporation documentation and registration requirements.',items:['Company Registration Assistance','Business Incorporation','Documentation Support','Registration Compliance']},
 {icon:ReceiptText,title:'GST Services',desc:'Support with GST registration, return filing and applicable compliance requirements.',items:['GST Registration','GST Return Filing','GST Compliance','GST Consultation']},
 {icon:FileText,title:'Income Tax Services',desc:'Practical assistance with income tax returns, planning and compliance.',items:['Income Tax Return Filing','Tax Planning','Tax Consultation','Income Tax Compliance']},
 {icon:ClipboardCheck,title:'Tax Audit',desc:'Support with tax audit preparation, record verification and related documentation.',items:['Tax Audit Assistance','Financial Record Verification','Audit Documentation','Tax Compliance Support']},
 {icon:ChartNoAxesCombined,title:'Business Financial Support',desc:'Financial documentation and accounting guidance to support business responsibilities.',items:['Financial Documentation','Accounting Guidance','Business Compliance Assistance','Financial Reporting']}
];
const features=[
 [ShieldCheck,'Professional Financial Support','Structured assistance for accounting and financial requirements.'],
 [Calculator,'Comprehensive Accounting Solutions','A range of accounting and taxation-related services.'],
 [Handshake,'Client-Focused Approach','Support with attention to individual business requirements.'],
 [BadgeCheck,'Reliable Taxation Assistance','Guidance through tax filing and compliance processes.'],
 [Landmark,'Business Compliance Support','Assistance with relevant business documentation.'],
 [BriefcaseBusiness,'Dedicated Client Assistance','Clear communication throughout the service process.']
];
const reveal={hidden:{opacity:0,y:22},show:{opacity:1,y:0,transition:{duration:.5}}};

export default function App(){
 const [menuOpen,setMenuOpen]=useState(false);
 const [modal,setModal]=useState({open:false,kind:'general'});
 const [form,setForm]=useState({name:'',phone:'',email:'',service:'Accounting Services',message:''});
 const [formAttempted,setFormAttempted]=useState(false);
 const showDemo=(kind='general')=>setModal({open:true,kind});
 const closeDemo=()=>setModal({open:false,kind:'general'});
 const nav=[['Home','#home'],['About Us','#about'],['Services','#services'],['Why Choose Us','#why-us'],['Reviews','#reviews'],['Contact','#contact']];
 const submitForm=e=>{e.preventDefault();setFormAttempted(true);showDemo('form');};
 const modalText=modal.kind==='call'?'The calling feature is displayed for demonstration purposes only and is not yet activated for live communication.':modal.kind==='whatsapp'?'The WhatsApp feature is displayed for demonstration purposes only and is not yet activated for live communication.':modal.kind==='form'?'Your enquiry form is a demonstration. Your details have not been sent, submitted or stored.': 'The contact and enquiry features are displayed for demonstration purposes only and are not yet activated for live communication.';
 return <div>
  <div className="topbar"><div className="container topbar-inner"><span>Professional Accounting &amp; Financial Services · Nellore</span><span><Phone size={13}/> {BUSINESS.phoneDisplay} <i/> <span className="open-label"><span/> Opens at 9:00 AM</span></span></div></div>
  <header className="header"><div className="container nav-wrap">
   <a className="brand" href="#home"><span className="brand-monogram">PSA</span><span className="brand-copy">PSA &amp; ASSOCIATES<small>ACCOUNTING · TAXATION · COMPLIANCE</small></span></a>
   <nav className={menuOpen?'nav open':'nav'}>{nav.map(([label,href])=><a href={href} key={label} onClick={()=>setMenuOpen(false)}>{label}</a>)}<button className="nav-cta" onClick={()=>showDemo('general')}>Contact Us <ArrowUpRight size={15}/></button></nav>
   <button className="menu-toggle" aria-label="Toggle navigation" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
  </div></header>

  <main>
   <section className="hero" id="home"><div className="hero-pattern"/><div className="container hero-layout">
    <motion.div className="hero-copy" initial="hidden" animate="show" variants={reveal}>
     <div className="eyebrow"><span/> ACCOUNTING &amp; FINANCIAL SERVICES <i/></div>
     <h1>Your trusted partner in<br/><em>accounting, taxation</em><br/> &amp; financial compliance.</h1>
     <p>Professional financial guidance and comprehensive accounting solutions to help individuals and businesses move forward with confidence.</p>
     <div className="hero-actions"><a href="#services" className="btn btn-gold">Explore Our Services <ArrowRight size={16}/></a><button className="btn btn-light-outline" onClick={()=>showDemo('general')}>Get in Touch <ArrowUpRight size={16}/></button></div>
     <div className="hero-stats"><div><strong>4.9<span>/5</span></strong><div className="stars">★★★★★</div><small>Google rating</small></div><div className="stat-sep"/><div><strong>10</strong><small>Google reviews</small></div><div className="stat-sep"/><div><strong>CA</strong><small>Financial services</small></div></div>
    </motion.div>
    <motion.div className="hero-visual" initial={{opacity:0,x:28}} animate={{opacity:1,x:0}} transition={{duration:.7,delay:.15}}>
     <div className="visual-frame"><img src="/images/office-reception.png" alt="PSA & Associates office reception and client meeting area" fetchPriority="high"/><div className="visual-label"><span className="label-icon"><ShieldCheck size={20}/></span><div><b>Professional assistance</b><small>Accounting &amp; compliance support</small></div></div></div>
     <div className="visual-stamp">PSA<br/><small>& ASSOCIATES</small></div>
    </motion.div>
   </div><div className="container hero-foot"><span>01 — A TRUSTED FINANCIAL PARTNER</span><a href="#about">DISCOVER OUR FIRM ↓</a></div></section>

   <section className="about section" id="about"><div className="container about-grid">
    <div className="section-index"><span>01</span><b>ABOUT THE FIRM</b><i/></div>
    <motion.div className="about-content" variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}>
     <h2>Professional service.<br/><em>Clear financial direction.</em></h2>
     <p className="lead">PSA &amp; Associates is a professional accounting and financial services firm based in Magunta Layout, Nellore, Andhra Pradesh.</p>
     <p>The firm focuses on providing accounting, company incorporation, GST, income tax and tax audit-related services. With a commitment to professional service and client-focused assistance, PSA &amp; Associates aims to simplify financial and regulatory responsibilities for individuals and businesses.</p>
     <a className="inline-link" href="#services">Explore our capabilities <ArrowUpRight size={16}/></a>
    </motion.div>
    <div className="about-points"><div className="point"><span>01</span>Professional financial assistance</div><div className="point"><span>02</span>Client-focused approach</div><div className="point"><span>03</span>Accounting and taxation support</div><div className="point"><span>04</span>Business compliance assistance</div><div className="point-note">Thoughtful support for your financial and regulatory responsibilities.</div></div>
   </div></section>

   <section className="gallery-section"><div className="container"><div className="gallery-heading"><div className="section-index"><span>02</span><b>OUR WORKSPACE</b><i/></div><h2>A closer look at <em>our office.</em></h2><p>A glimpse inside the PSA &amp; Associates workspace in Nellore.</p></div>
    <div className="photo-grid">
     <figure className="photo-large"><img src="/images/office-reception.png" alt="Reception and consultation area at PSA & Associates" loading="lazy"/><figcaption>Client consultation space</figcaption></figure>
     <figure className="photo-tall"><img src="/images/office-nameplate.png" alt="Chartered Accountant nameplate on an office desk" loading="lazy"/><figcaption>Professional office desk detail</figcaption></figure>
     <figure className="photo-wide"><img src="/images/office-workspace.png" alt="Office workspace and desk at PSA & Associates" loading="lazy"/><figcaption>Office workspace</figcaption></figure>
    </div>
   </div></section>

   <section className="services section" id="services"><div className="container"><div className="section-heading"><div><div className="section-index"><span>03</span><b>WHAT WE DO</b><i/></div><h2>Solutions for your<br/><em>financial needs.</em></h2></div><p>Explore accounting, taxation, registration and compliance-related services designed to support individuals and businesses.</p></div>
    <div className="service-grid">{services.map((s,i)=><motion.article className="service-card" key={s.title} variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}} transition={{delay:i*.04}}><div className="service-top"><span className="service-icon"><s.icon size={22}/></span><span className="service-count">0{i+1}</span></div><h3>{s.title}</h3><p>{s.desc}</p><ul>{s.items.map(item=><li key={item}><Check size={13}/>{item}</li>)}</ul><button className="learn-link" onClick={()=>showDemo('general')}>Learn More <ArrowUpRight size={15}/></button></motion.article>)}</div>
   </div></section>

   <section className="why section" id="why-us"><div className="container why-layout"><div className="why-copy"><div className="section-index"><span>04</span><b>WHY PSA &amp; ASSOCIATES</b><i/></div><h2>Financial matters<br/>deserve <em>careful attention.</em></h2><p>We focus on professional assistance, client-focused service and practical support across accounting, taxation and business compliance requirements.</p><button className="btn btn-gold" onClick={()=>showDemo('general')}>Connect with us <ArrowRight size={16}/></button></div><div className="feature-grid">{features.map(([Icon,title,desc],i)=><motion.div className="feature" key={title} variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}><span className="feature-number">0{i+1}</span><Icon size={24}/><h3>{title}</h3><p>{desc}</p></motion.div>)}</div></div></section>

   <section className="reviews section" id="reviews"><div className="container"><div className="section-heading reviews-heading"><div><div className="section-index"><span>05</span><b>CLIENT FEEDBACK</b><i/></div><h2>Trust, reflected in<br/><em>client feedback.</em></h2></div><div className="rating-panel"><strong>4.9<span>/5.0</span></strong><div><div className="stars big">★★★★★</div><b>Google Business Rating</b><small>Based on 10 Google reviews</small></div></div></div>
    <div className="review-note"><div className="google-mark">G</div><div><b>Genuine customer reviews</b><p>Individual review cards will be added from the original customer reviews you provide. No customer names or review text have been invented for this preview.</p></div></div>
    {GOOGLE_REVIEWS_URL?<a className="btn btn-navy" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">See All Google Reviews <ExternalLink size={15}/></a>:<p className="review-link-pending">The verified Google Business Profile review URL or Place ID is required to activate the “See All Google Reviews” link.</p>}
   </div></section>

   <section className="contact-banner"><div className="container banner-inner"><div><span>NEED ACCOUNTING OR TAX SUPPORT?</span><h2>Let’s make the next step <em>clear.</em></h2></div><button className="btn btn-gold" onClick={()=>showDemo('general')}>Enquire Now <ArrowUpRight size={16}/></button></div></section>

   <section className="contact section" id="contact"><div className="container contact-layout"><div className="contact-info"><div className="section-index"><span>06</span><b>CONTACT &amp; LOCATION</b><i/></div><h2>Visit our office<br/><em>in Nellore.</em></h2><p>For enquiries about accounting, GST, income tax, company incorporation and tax audit support, please visit or contact the office.</p>
    <div className="contact-item"><span><MapPin size={19}/></span><div><b>Office address</b><p>{BUSINESS.address}</p></div></div>
    <div className="contact-item"><span><Phone size={18}/></span><div><b>Contact number</b><p>{BUSINESS.phoneDisplay}</p></div></div>
    <div className="contact-item"><span><Clock3 size={18}/></span><div><b>Business hours</b><p>Opens at 9:00 AM · Other hours to be confirmed</p></div></div>
    <div className="contact-buttons"><button className="btn btn-navy" onClick={()=>showDemo('call')}><Phone size={16}/> Call Us</button><button className="btn btn-whatsapp" onClick={()=>showDemo('whatsapp')}><MessageCircle size={17}/> WhatsApp Us</button></div>
    <a className="inline-link" href={DIRECTIONS_URL} target="_blank" rel="noreferrer">Get Directions <ArrowUpRight size={16}/></a>
   </div>
   <div className="form-panel"><div className="form-head"><span>ENQUIRY FORM</span><small>Share your requirements</small></div><form onSubmit={submitForm}><div className="form-row"><label>Full name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your full name"/></label><label>Mobile number<input required type="tel" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Your mobile number"/></label></div><label>Email address<input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com"/></label><label>Service required<select value={form.service} onChange={e=>setForm({...form,service:e.target.value})}>{services.map(s=><option key={s.title}>{s.title}</option>)}</select></label><label>Message<textarea rows="4" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="How can we assist you?"/></label><button className="btn btn-gold" type="submit">Submit Enquiry <ArrowRight size={16}/></button><small className="form-disclaimer">Demo mode: your details are not sent or stored. Submitting displays a demonstration notice only.</small></form></div>
   </div></section>

   <section className="map-section"><div className="container map-head"><div><div className="section-index"><span>07</span><b>FIND OUR OFFICE</b><i/></div><h2>Visit PSA &amp; <em>Associates.</em></h2></div><a className="btn btn-outline-navy" href={DIRECTIONS_URL} target="_blank" rel="noreferrer">Get Directions <ArrowUpRight size={15}/></a></div><div className="container"><div className="map-frame"><iframe title="Map showing the PSA & Associates address in Magunta Layout, Nellore" src={MAP_EMBED_URL} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/></div><p className="map-caption"><MapPin size={15}/>{BUSINESS.address}</p></div></section>
  </main>

  <footer className="footer"><div className="container footer-grid"><div className="footer-about"><a className="brand brand-footer" href="#home"><span className="brand-monogram">PSA</span><span className="brand-copy">PSA &amp; ASSOCIATES<small>ACCOUNTING · TAXATION · COMPLIANCE</small></span></a><p>Professional accounting and financial services in Magunta Layout, Nellore, Andhra Pradesh.</p></div><div className="footer-col"><b>Quick Links</b>{nav.map(([label,href])=><a key={label} href={href}>{label}</a>)}</div><div className="footer-col"><b>Our Services</b>{services.map(s=><a key={s.title} href="#services">{s.title}</a>)}</div><div className="footer-col"><b>Contact</b><a href="#contact">{BUSINESS.phoneDisplay}</a><a href="#contact">Magunta Layout, Nellore</a><a href={DIRECTIONS_URL} target="_blank" rel="noreferrer">Get Directions</a></div></div>
   <div className="container footer-bottom"><span>© 2026 PSA &amp; Associates. All Rights Reserved.</span><a className="developer-credit" href="https://mainnovextechnologies.lovable.app/" target="_blank" rel="noreferrer"><img src="/images/ma-innovex-logo.png" alt="MA Innovex Technologies logo"/> Website Designed &amp; Developed by <b>MA Innovex Technologies</b> <ArrowUpRight size={13}/></a></div>
  </footer>

  <div className="floating-actions"><button className="float-call" aria-label="Call Us" onClick={()=>showDemo('call')}><Phone size={19}/><span>Call Us</span></button><button className="float-whatsapp" aria-label="WhatsApp Us" onClick={()=>showDemo('whatsapp')}><MessageCircle size={21}/><span>WhatsApp Us</span></button></div>

  <AnimatePresence>{modal.open&&<motion.div className="modal-overlay" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={closeDemo}><motion.div className="demo-modal" initial={{opacity:0,y:20,scale:.96}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:15,scale:.98}} onClick={e=>e.stopPropagation()}><button className="modal-x" aria-label="Close" onClick={closeDemo}><X size={18}/></button><div className="modal-icon">{modal.kind==='call'?<Phone/>:modal.kind==='whatsapp'?<MessageCircle/>:<Sparkles/>}</div><span className="modal-overline">MA INNOVEX TECHNOLOGIES</span><h3>Demo Website Notice</h3><p>Thank you for your interest! This website is currently a demonstration project developed by MA Innovex Technologies. {modalText} Thank you for your understanding!</p><div className="modal-actions"><button className="btn btn-navy" onClick={closeDemo}>Understood</button><button className="btn btn-modal-close" onClick={closeDemo}>Close</button></div></motion.div></motion.div>}</AnimatePresence>
 </div>;
}
