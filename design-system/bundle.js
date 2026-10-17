/* @ds-bundle: {"format": 4, "namespace": "Solvable", "components": [{"name": "Logo"}, {"name": "Icon"}, {"name": "Button"}, {"name": "Highlight"}, {"name": "Label"}, {"name": "MarginNote"}, {"name": "GraphPaper"}, {"name": "SessionCard"}, {"name": "StatLine"}, {"name": "FaqItem"}, {"name": "SignupForm"}, {"name": "SiteHeader"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;
  var useState = React.useState;
  var ICONS = {"tick": "<path d=\"M5 12.5l4.5 4.5L19 7\"/>", "plus": "<path d=\"M12 5v14M5 12h14\"/>", "arrow-right": "<path d=\"M4 12h15M13 6l6 6-6 6\"/>", "arrow-curve": "<path d=\"M4 6c1 7 6 11 14 11\"/><path d=\"M14 13l4 4-4 3.5\"/>", "ring": "<path d=\"M20 11.5c0 4.2-3.6 7.5-8 7.5s-8-3.1-8-7.3C4 7.5 7.8 4.6 12.4 4.8c3 .1 5.6 1.4 6.8 3.6\"/>", "book": "<path d=\"M12 7c-2-1.6-4.6-2.2-8-2v13c3.4-.2 6 .4 8 2 2-1.6 4.6-2.2 8-2V5c-3.4-.2-6 .4-8 2z\"/><path d=\"M12 7v13\"/>", "calendar": "<rect x=\"4\" y=\"5.5\" width=\"16\" height=\"14\" rx=\"1.5\"/><path d=\"M4 10h16M8.5 3.5v4M15.5 3.5v4\"/>", "clock": "<circle cx=\"12\" cy=\"12\" r=\"8\"/><path d=\"M12 7.5V12l3 2\"/>", "pin": "<path d=\"M12 20s-6-5.6-6-10.2A6 6 0 0 1 18 9.8C18 14.4 12 20 12 20z\"/><circle cx=\"12\" cy=\"10\" r=\"2.2\"/>", "cup": "<path d=\"M5 9h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5V9z\"/><path d=\"M16 10.5h1.5a2.5 2.5 0 0 1 0 5H16\"/><path d=\"M9 3.5c-.8 1 .8 2 0 3M12.5 3.5c-.8 1 .8 2 0 3\"/>", "flask": "<path d=\"M9.5 4h5M10.5 4v5.5L5.2 18a1.5 1.5 0 0 0 1.3 2.2h11a1.5 1.5 0 0 0 1.3-2.2l-5.3-8.5V4\"/><path d=\"M7.8 14.5h8.4\"/>", "chat": "<path d=\"M5 6.5h14v9H11l-4 3.5v-3.5H5z\"/><path d=\"M9 10.5h6\"/>", "people": "<circle cx=\"9\" cy=\"9\" r=\"3\"/><path d=\"M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5\"/><circle cx=\"16.5\" cy=\"9.5\" r=\"2.4\"/><path d=\"M15.5 14.2c2.6-.2 4.4 1.4 5 4.3\"/>", "chart-down": "<path d=\"M4 4v16h16\"/><path d=\"M7 7c3 0 4 4 6.5 7.5S17 17 19 17\"/><circle cx=\"19\" cy=\"17\" r=\"1\"/>"};
  var LOGO = {"solv": "<path transform=\"translate(74 52)\" d=\"M20.992 0.896Q16.832 0.896 13.536000000000001 0.09600000000000003Q10.24 -0.704 7.904 -2.336Q5.5680000000000005 -3.968 4.256 -6.432Q2.944 -8.896 2.7520000000000002 -12.096L10.816 -14.72Q10.944 -11.84 12.256 -9.92Q13.568 -8.0 16.0 -7.104Q18.432000000000002 -6.208 21.44 -6.208Q24.32 -6.208 26.304000000000002 -6.912000000000001Q28.288 -7.6160000000000005 29.312 -8.8Q30.336000000000002 -9.984 30.336000000000002 -11.392Q30.336000000000002 -13.056000000000001 29.056 -14.080000000000002Q27.776 -15.104000000000001 25.567999999999998 -15.808Q23.36 -16.512 20.544 -17.152Q17.408 -17.856 14.368 -18.752000000000002Q11.328 -19.648 8.864 -21.056Q6.4 -22.464000000000002 4.96 -24.704Q3.52 -26.944 3.52 -30.336000000000002Q3.52 -34.24 5.472 -37.088Q7.424 -39.936 11.200000000000001 -41.536Q14.976 -43.136 20.288 -43.136Q25.664 -43.136 29.472 -41.568Q33.28 -40.0 35.391999999999996 -37.152Q37.504 -34.304 37.696 -30.400000000000002L29.376 -28.096Q29.376 -30.080000000000002 28.736 -31.552Q28.096 -33.024 26.944000000000003 -34.016000000000005Q25.792 -35.008 24.096000000000004 -35.52Q22.400000000000002 -36.032000000000004 20.224 -36.032000000000004Q17.728 -36.032000000000004 15.904 -35.392Q14.08 -34.752 13.152000000000001 -33.664Q12.224 -32.576 12.224 -31.104Q12.224 -29.376 13.664000000000001 -28.256Q15.104000000000001 -27.136 17.504 -26.432000000000002Q19.904 -25.728 22.784 -25.088Q25.536 -24.512 28.384 -23.648Q31.232 -22.784 33.696 -21.408Q36.160000000000004 -20.032 37.664 -17.695999999999998Q39.168 -15.36 39.168 -11.84Q39.168 -8.0 37.120000000000005 -5.12Q35.072 -2.24 31.008000000000003 -0.6720000000000002Q26.944 0.896 20.992 0.896Z\"/><path transform=\"translate(74 52)\" d=\"M61.184 0.896Q56.128 0.896 52.288 -1.12Q48.448 -3.136 46.272000000000006 -7.072000000000001Q44.096000000000004 -11.008000000000001 44.096000000000004 -16.896Q44.096000000000004 -22.784 46.304 -26.688000000000002Q48.512 -30.592000000000002 52.384 -32.544000000000004Q56.256 -34.496 61.184 -34.496Q66.24000000000001 -34.496 70.11200000000001 -32.512Q73.98400000000001 -30.528000000000002 76.19200000000001 -26.592Q78.4 -22.656 78.4 -16.768Q78.4 -10.816 76.128 -6.880000000000001Q73.856 -2.944 69.984 -1.024Q66.112 0.896 61.184 0.896ZM61.504000000000005 -5.952Q64.0 -5.952 65.696 -7.104Q67.392 -8.256 68.256 -10.592Q69.12 -12.928 69.12 -16.256Q69.12 -19.776 68.19200000000001 -22.240000000000002Q67.26400000000001 -24.704 65.47200000000001 -26.016Q63.68000000000001 -27.328 60.928 -27.328Q58.56 -27.328 56.832 -26.208Q55.104 -25.088 54.208 -22.752000000000002Q53.312 -20.416 53.312 -17.024Q53.312 -11.584 55.488 -8.768Q57.664 -5.952 61.504000000000005 -5.952Z\"/><path transform=\"translate(74 52)\" d=\"M84.92800000000001 0.0V-45.76H94.016V0.0Z\"/><path transform=\"translate(74 52)\" d=\"M110.144 0.0 98.944 -33.536H109.12L116.22400000000002 -7.296H117.248L124.352 -33.536H134.144L122.88000000000001 0.0Z\"/>", "able": "<path transform=\"translate(74 52)\" d=\"M146.94400000000002 0.896Q144.12800000000001 0.896 141.952 -0.22400000000000003Q139.776 -1.344 138.56 -3.4560000000000004Q137.34400000000002 -5.5680000000000005 137.34400000000002 -8.704Q137.34400000000002 -11.456 138.40000000000003 -13.312000000000001Q139.45600000000002 -15.168000000000001 141.50400000000002 -16.32Q143.55200000000002 -17.472 146.56 -18.240000000000002Q149.568 -19.008 153.40800000000002 -19.584Q155.45600000000002 -19.904 156.76800000000003 -20.192Q158.08 -20.48 158.72000000000003 -21.152Q159.36 -21.824 159.36 -23.104Q159.36 -24.896 158.08 -26.176000000000002Q156.8 -27.456 154.048 -27.456Q152.192 -27.456 150.62400000000002 -26.816000000000003Q149.056 -26.176000000000002 147.936 -24.896Q146.816 -23.616 146.304 -21.632L138.17600000000002 -24.128Q138.94400000000002 -26.752 140.38400000000001 -28.672Q141.824 -30.592000000000002 143.872 -31.904000000000003Q145.92000000000002 -33.216 148.544 -33.856Q151.168 -34.496 154.24 -34.496Q159.168 -34.496 162.272 -32.928Q165.376 -31.36 166.912 -28.064Q168.448 -24.768 168.448 -19.584V-13.824Q168.448 -11.584 168.544 -9.28Q168.64000000000001 -6.976 168.8 -4.640000000000001Q168.96 -2.3040000000000003 169.15200000000002 0.0H161.024Q160.76800000000003 -1.6 160.54400000000004 -3.6799999999999997Q160.32000000000002 -5.76 160.192 -7.872H159.04000000000002Q158.144 -5.44 156.48000000000002 -3.4560000000000004Q154.816 -1.472 152.416 -0.288Q150.01600000000002 0.896 146.94400000000002 0.896ZM150.848 -5.76Q152.06400000000002 -5.76 153.312 -6.208Q154.56 -6.656000000000001 155.74400000000003 -7.456Q156.92800000000003 -8.256 157.92000000000002 -9.472000000000001Q158.912 -10.688 159.55200000000002 -12.224L159.424 -17.6L160.89600000000002 -17.28Q159.74400000000003 -16.448 158.20800000000003 -15.968Q156.67200000000003 -15.488 155.04000000000002 -15.232Q153.40800000000002 -14.976 151.80800000000002 -14.656Q150.20800000000003 -14.336 148.96000000000004 -13.824000000000002Q147.71200000000002 -13.312000000000001 146.976 -12.448Q146.24 -11.584 146.24 -10.048Q146.24 -8.064 147.52 -6.912Q148.8 -5.76 150.848 -5.76Z\"/><path transform=\"translate(74 52)\" d=\"M196.864 0.896Q193.66400000000002 0.896 191.296 -0.35200000000000004Q188.928 -1.6 187.45600000000002 -3.968Q185.984 -6.336 185.40800000000002 -9.728H184.192L184.12800000000001 0.0H176.512V-16.512V-45.76H185.728V-34.752Q185.728 -33.216 185.536 -31.456000000000003Q185.34400000000002 -29.696 184.99200000000002 -27.840000000000003Q184.64000000000001 -25.984 184.256 -24.0H185.66400000000002Q186.496 -27.2 187.936 -29.536Q189.376 -31.872 191.616 -33.120000000000005Q193.85600000000002 -34.368 196.928 -34.368Q201.15200000000002 -34.368 204.22400000000002 -32.192Q207.29600000000002 -30.016000000000002 208.99200000000002 -26.048000000000002Q210.68800000000002 -22.080000000000002 210.68800000000002 -16.64Q210.68800000000002 -11.328 209.024 -7.3919999999999995Q207.36 -3.456 204.25600000000003 -1.28Q201.15200000000002 0.896 196.864 0.896ZM193.60000000000002 -6.656000000000001Q195.904 -6.656000000000001 197.56799999999998 -7.904000000000001Q199.232 -9.152000000000001 200.128 -11.456Q201.024 -13.76 201.024 -16.832Q201.024 -19.904 200.16000000000003 -22.144Q199.29600000000002 -24.384 197.69600000000003 -25.664Q196.096 -26.944 193.792 -26.944Q192.256 -26.944 190.976 -26.368000000000002Q189.69600000000003 -25.792 188.73600000000002 -24.8Q187.776 -23.808 187.072 -22.560000000000002Q186.36800000000002 -21.312 186.048 -19.968Q185.728 -18.624 185.728 -17.408V-16.192Q185.728 -14.72 186.17600000000002 -13.024000000000001Q186.62400000000002 -11.328 187.616 -9.888Q188.608 -8.448 190.08 -7.5520000000000005Q191.55200000000002 -6.656000000000001 193.60000000000002 -6.656000000000001Z\"/><path transform=\"translate(74 52)\" d=\"M217.344 0.0V-45.76H226.43200000000002V0.0Z\"/><path transform=\"translate(74 52)\" d=\"M250.496 0.896Q246.336 0.896 243.104 -0.25599999999999995Q239.872 -1.408 237.632 -3.5839999999999996Q235.392 -5.76 234.208 -8.96Q233.024 -12.16 233.024 -16.192Q233.024 -20.16 234.144 -23.52Q235.264 -26.88 237.44 -29.344Q239.616 -31.808 242.752 -33.152Q245.888 -34.496 249.856 -34.496Q253.696 -34.496 256.704 -33.248000000000005Q259.712 -32.0 261.728 -29.503999999999998Q263.744 -27.008 264.672 -23.392Q265.6 -19.776 265.344 -15.104000000000001L238.976 -14.848V-19.904L260.032 -20.096L256.76800000000003 -17.536Q257.216 -20.928 256.32 -23.104Q255.424 -25.28 253.728 -26.304000000000002Q252.032 -27.328 249.984 -27.328Q247.55200000000002 -27.328 245.69600000000003 -26.048000000000002Q243.84 -24.768 242.816 -22.304000000000002Q241.792 -19.84 241.792 -16.384Q241.792 -10.944 244.192 -8.384Q246.592 -5.824 250.496 -5.824Q252.288 -5.824 253.536 -6.304Q254.784 -6.784 255.584 -7.552Q256.384 -8.32 256.86400000000003 -9.280000000000001Q257.344 -10.24 257.664 -11.200000000000001L265.664 -9.472Q265.088 -7.104 263.968 -5.216Q262.848 -3.3280000000000003 260.992 -1.9520000000000002Q259.136 -0.5760000000000001 256.544 0.15999999999999998Q253.952 0.896 250.496 0.896Z\"/>", "width": 350, "ax": 203.85, "aw": 142.98999999999998};

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function html(s) { return { __html: s }; }

  function Icon(p) {
    var size = p.size || 20;
    var body = ICONS[p.name] || ICONS.plus;
    return h('svg', {
      className: cx('sv-icon', p.className), viewBox: '0 0 24 24', width: size, height: size,
      fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round',
      role: p.label ? 'img' : undefined, 'aria-label': p.label, 'aria-hidden': p.label ? undefined : true,
      dangerouslySetInnerHTML: html(body)
    });
  }

  function Mark(p) {
    return h('g', { transform: p.t || '' },
      h('rect', { x: 4, y: 12, width: 44, height: 44, rx: 5, fill: 'none', className: 'sv-logo-box', strokeWidth: 4.5 }),
      h('path', { d: 'M14 35 L24 45 L54 8', fill: 'none', className: p.mono ? 'sv-logo-box' : 'sv-logo-tick', strokeWidth: 6, strokeLinecap: 'round', strokeLinejoin: 'round' })
    );
  }

  function Logo(p) {
    var variant = p.variant || 'full';
    var height = p.height || 40;
    if (variant === 'mark') {
      return h('svg', { className: cx('sv-logo', p.className), viewBox: '0 0 64 64', height: height, width: height, role: 'img', 'aria-label': 'Solvable' }, h(Mark, { t: 'translate(4 0)' }));
    }
    var mono = variant === 'mono';
    var w = LOGO.width;
    return h('svg', { className: cx('sv-logo', mono && 'sv-logo--mono', p.className), viewBox: '0 0 ' + w + ' 64', height: height, width: height * w / 64, role: 'img', 'aria-label': 'Solvable' },
      mono ? null : h('rect', { className: 'sv-logo-swipe', x: LOGO.ax.toFixed(1), y: 6, width: LOGO.aw.toFixed(1), height: 52, rx: 2, transform: 'rotate(-1.5 ' + (LOGO.ax + LOGO.aw / 2).toFixed(1) + ' 32)' }),
      h(Mark, { t: 'translate(0 -2)', mono: mono }),
      h('g', { className: 'sv-logo-word', dangerouslySetInnerHTML: html(LOGO.solv) }),
      h('g', { className: mono ? 'sv-logo-word' : 'sv-logo-able', dangerouslySetInnerHTML: html(LOGO.able) })
    );
  }

  function Button(p) {
    var variant = p.variant || 'primary';
    var cls = cx('sv-btn', 'sv-btn--' + variant, p.className);
    var kids = [p.children];
    if (p.icon) kids.push(h(Icon, { key: 'i', name: p.icon, size: 18 }));
    if (p.href) return h('a', { className: cls, href: p.href, onClick: p.onClick }, kids);
    return h('button', { className: cls, type: p.type || 'button', disabled: p.disabled, onClick: p.onClick }, kids);
  }

  function Highlight(p) {
    return h('mark', { className: cx('sv-highlight', p.className) }, p.children);
  }

  function Label(p) {
    var tone = p.tone || 'muted';
    return h('span', { className: cx('sv-label', 'sv-label--' + tone, p.className) },
      p.icon ? h(Icon, { name: p.icon, size: 14 }) : null, p.children);
  }

  function MarginNote(p) {
    var dir = p.direction || 'left';
    return h('span', { className: cx('sv-note', 'sv-note--' + dir, p.className) },
      dir === 'down' ? null : null, p.children,
      h('svg', { className: 'sv-note-arrow', viewBox: '0 0 60 40', width: 48, height: 32, fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
        h('path', { d: 'M54 6c-4 16-18 26-44 28' }), h('path', { d: 'M18 26l-8 8 10 4' })));
  }

  function GraphPaper(p) {
    return h(p.as || 'div', { className: cx('sv-graph', p.className), style: p.style }, p.children);
  }

  function SessionCard(p) {
    var status = p.status || 'upcoming';
    var week = String(p.week || 1).padStart(2, '0');
    return h('article', { className: cx('sv-session', 'sv-session--' + status, p.className) },
      h('div', { className: 'sv-session-top' },
        h(Label, { tone: status === 'next' ? 'pen' : 'muted' }, 'Week ' + week + (p.minutes ? ' · ' + p.minutes + ' min read' : '')),
        status === 'done' ? h('span', { className: 'sv-session-done' }, h(Icon, { name: 'tick', size: 16 }), 'Done') : null,
        status === 'next' ? h('span', { className: 'sv-session-next' }, 'Next up') : null
      ),
      h('h3', { className: 'sv-session-title' }, p.question),
      p.reading ? h('p', { className: 'sv-session-reading' }, h(Icon, { name: 'book', size: 16 }), p.reading) : null,
      (p.date || p.place) ? h('p', { className: 'sv-session-meta' },
        p.date ? h('span', null, h(Icon, { name: 'calendar', size: 16 }), p.date) : null,
        p.place ? h('span', null, h(Icon, { name: 'pin', size: 16 }), p.place) : null) : null,
      status === 'next' && p.href ? h('div', { className: 'sv-session-cta' }, h(Button, { href: p.href, icon: 'arrow-right' }, p.cta || 'Save a seat')) : null
    );
  }

  function StatLine(p) {
    return h('figure', { className: cx('sv-stat', p.className) },
      h('div', { className: 'sv-stat-figures' },
        h('span', { className: 'sv-stat-from' }, p.from),
        h(Icon, { name: 'arrow-right', size: 22 }),
        h('span', { className: 'sv-stat-to' }, h(Highlight, null, p.to))),
      h('figcaption', { className: 'sv-stat-caption' }, p.caption,
        p.source ? h('span', { className: 'sv-stat-source' }, ' Source: ' + p.source) : null));
  }

  function FaqItem(p) {
    return h('details', { className: cx('sv-faq', p.className), open: p.open },
      h('summary', null, h('span', null, p.question), h(Icon, { name: 'plus', size: 18, className: 'sv-faq-icon' })),
      h('div', { className: 'sv-faq-answer' }, p.children));
  }

  function SignupForm(p) {
    var s = useState({ name: '', email: '', interest: '' });
    var v = s[0], set = s[1];
    var st = useState(p.initialState || 'idle');
    var state = st[0], setState = st[1];
    var er = useState('');
    var err = er[0], setErr = er[1];
    function upd(k) { return function (e) { var n = Object.assign({}, v); n[k] = e.target.value; set(n); }; }
    function submit(e) {
      e.preventDefault();
      if (!v.name.trim()) return setErr('Add your first name so we know who is coming.');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) return setErr('That email looks incomplete. Check for the @ and the domain.');
      setErr('');
      setState('done');
      if (p.onSubmit) p.onSubmit(v);
    }
    if (state === 'done') {
      return h('div', { className: cx('sv-form', 'sv-form--done', p.className), role: 'status' },
        h('span', { className: 'sv-form-tick' }, h(Icon, { name: 'tick', size: 22 })),
        h('div', null, h('p', { className: 'sv-form-done-title' }, 'You are on the list.'),
          h('p', { className: 'sv-form-help' }, p.doneText || 'We will send the reading and the venue a week before the session.')));
    }
    var idp = p.idPrefix || 'sv';
    return h('form', { className: cx('sv-form', p.className), onSubmit: submit, noValidate: true },
      h('div', { className: 'sv-field' }, h('label', { htmlFor: idp + '-name' }, 'First name'),
        h('input', { id: idp + '-name', value: v.name, onChange: upd('name'), autoComplete: 'given-name' })),
      h('div', { className: 'sv-field' }, h('label', { htmlFor: idp + '-email' }, 'Email'),
        h('input', { id: idp + '-email', type: 'email', value: v.email, onChange: upd('email'), autoComplete: 'email' })),
      h('div', { className: 'sv-field' }, h('label', { htmlFor: idp + '-interest' }, 'Which problem do you find most interesting?'),
        h('input', { id: idp + '-interest', value: v.interest, onChange: upd('interest'), placeholder: 'Malaria, cheap energy, AI for science…' }),
        h('p', { className: 'sv-form-help' }, 'Optional. It helps us pick readings.')),
      err ? h('p', { className: 'sv-form-error', role: 'alert' }, err) : null,
      h(Button, { type: 'submit', icon: 'arrow-right' }, p.submitLabel || 'Join the next session'));
  }

  function SiteHeader(p) {
    var links = p.links || [];
    return h('header', { className: cx('sv-header', p.className) },
      h('a', { className: 'sv-header-home', href: p.homeHref || '#', 'aria-label': 'Solvable home' }, h(Logo, { height: 32 })),
      h('nav', { className: 'sv-header-nav', 'aria-label': 'Main' },
        links.map(function (l) { return h('a', { key: l.label, href: l.href }, l.label); }),
        p.cta ? h(Button, { href: p.cta.href, variant: 'primary' }, p.cta.label) : null));
  }

  window.Solvable = {
    Logo: Logo, Icon: Icon, Button: Button, Highlight: Highlight, Label: Label, MarginNote: MarginNote,
    GraphPaper: GraphPaper, SessionCard: SessionCard, StatLine: StatLine, FaqItem: FaqItem,
    SignupForm: SignupForm, SiteHeader: SiteHeader, iconNames: Object.keys(ICONS)
  };
})();
