(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"3UR4":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return u})),t.d(n,"default",(function(){return f}));var i=t("cxan"),a=t("+wNj"),l=(t("ERkP"),t("ZVZ0")),o=t("9Rvw"),s=t("qbsg"),r=t("7UOt"),c=t("UnEl"),d=t("3tc1"),p=t("CdA1"),b=t("vD+s"),h=(t("l1C2"),["components"]),u={};void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!Object.prototype.hasOwnProperty.call(u,"__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/components/link.mdx"}});var m={_frontmatter:u},k=o.a;function f(e){var n,t,f,y,O=e.components,g=Object(a.a)(e,h);return Object(l.b)(k,Object(i.a)({},m,g,{components:O,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"link"},"Link"),Object(l.b)(r.a,{type:"alert",mdxType:"StatusLabel"},"Draft"),Object(l.b)(r.a,{type:"success",style:{marginLeft:"var(--spacing-xs)"},mdxType:"StatusLabel"},"Accessible"),Object(l.b)(b.a,{mdxType:"LargeParagraph"},"Links are used as navigational elements and can be used on their own or in inline with text. They provide a lightweight option for navigation."),Object(l.b)("h2",{id:"principles"},"Principles"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Too many links will clutter a page and make it difficult for users to identify their next steps. This is especially true for inline links, which should be used sparingly."),Object(l.b)("li",{parentName:"ul"},"Use links when you want users to:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Navigate to a different page"),Object(l.b)("li",{parentName:"ul"},"Navigate to an entirely different site"),Object(l.b)("li",{parentName:"ul"},"Jump to an element on the same page"),Object(l.b)("li",{parentName:"ul"},"Link to emails or phone numbers"))),Object(l.b)("li",{parentName:"ul"},"HDS Link supports a link with an external icon. Use the ",Object(l.b)("inlineCode",{parentName:"li"},"external")," prop when you wish to navigate to an entirely different site."),Object(l.b)("li",{parentName:"ul"},"HDS Link supports a link that opens in a new tab. Use the ",Object(l.b)("inlineCode",{parentName:"li"},"openInNewTab")," prop when you wish to open the link in a new tab.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Generally, links should not open in a new tab. However, this can be desirable if the user is in a middle of a process, e.g. filling a form.")))),Object(l.b)("h2",{id:"accessibility"},"Accessibility"),Object(l.b)("p",null,"The HDS link component is primarily a native HTML hyperlink navigational element. The Enter key activates the link and causes the user agent to move focus to the link destination."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Remember to tell users if the link is going to open an entirely new site. In HDS React Link this feature is provided through external links (prop ",Object(l.b)("inlineCode",{parentName:"p"},"external"),"). There is a default aria-label for screen readers. This can be overwritten by using the ",Object(l.b)("inlineCode",{parentName:"p"},"openInExternalDomainAriaLabel")," prop.\nIn HDS Core, set a proper ",Object(l.b)("inlineCode",{parentName:"p"},"aria-label")," to the anchor tag as shown in the examples below.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Remember to tell users if the link is going to open in a new tab. In HDS React Link this feature is provided through prop ",Object(l.b)("inlineCode",{parentName:"p"},"openInNewTab"),". There is a default aria-label for screen readers. This can be overwritten by using the ",Object(l.b)("inlineCode",{parentName:"p"},"openInNewTabAriaLabel")," prop.\nIn HDS Core, set a proper ",Object(l.b)("inlineCode",{parentName:"p"},"aria-label")," to the anchor tag as shown in the examples below.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Some assistive technologies provide a list of all links on the page to its user. If the text of the links does not clearly give the purpose, or if multiple links with the same name point to different targets (e.g., “read more”), users are forced to locate the link on the page and search surrounding information for context."))),Object(l.b)("p",null,"Make sure that:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Link text is the visible label for the native HTML link and is used to provide the purpose of the link which is clear and easy to understand for all users."),Object(l.b)("li",{parentName:"ul"},"The alt attribute for the img element is used to describe the purpose of a graphical link with an image inside the link."),Object(l.b)("li",{parentName:"ul"},"The title attribute can be used to supplement the link text with any additional useful description."),Object(l.b)("li",{parentName:"ul"},"The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context."),Object(l.b)("li",{parentName:"ul"},"Icons should always be the same colour as the link text")),Object(l.b)("h2",{id:"usage-and-variations"},"Usage and variations"),Object(l.b)("h3",{id:"inline"},"Inline"),Object(l.b)("p",null,"These links are the default link variant. Inline links are used within a sentence or paragraph and are underlined."),Object(l.b)("p",null,"The underlining helps differentiate them from the text they are placed next to and makes it clear users can interact with them. Inline links should not be used on their own."),Object(l.b)(s.c,{__position:2,__code:'<p style={{ fontSize: \'14px\' }}>\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n  <Link\n    href="https://github.com/City-of-Helsinki/helsinki-design-system"\n    external\n    openInExternalDomainAriaLabel="Opens a different website"\n  >\n    HDS Github\n  </Link>\n  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n</p>',__scope:(n={props:g,DefaultLayout:o.a,Playground:s.c,Link:c.a,IconDocument:d.a,IconPhone:p.Db,IconEnvelope:p.t,IconPhoto:d.b,StatusLabel:r.a,LargeParagraph:b.a},n.DefaultLayout=o.a,n._frontmatter=u,n),mdxType:"Playground"},Object(l.b)("p",{style:{fontSize:"14px"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",Object(l.b)(c.a,{href:"https://github.com/City-of-Helsinki/helsinki-design-system",external:!0,openInExternalDomainAriaLabel:"Opens a different website",mdxType:"Link"},"HDS Github"),"consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),Object(l.b)("h4",{id:"core"},"Core:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<p style={{ fontSize: \'14px\', lineHeight: \'1.5\' }}>\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n  <a href="https://github.com/City-of-Helsinki/helsinki-design-system" class="hds-link hds-link--small" aria-label="HDS Github. Opens in external domain">\n  HDS Github<i class="hds-icon icon hds-icon--link-external hds-icon--size-xs vertical-align-small-or-medium-icon" aria-hidden="true"></i></a>\n  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n</p>\n')),Object(l.b)("h4",{id:"react"},"React:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},'<p style={{ fontSize: \'14px\' }}>\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n  <Link href="https://github.com/City-of-Helsinki/helsinki-design-system" external openInExternalDomainAriaLabel="Opens a different website">\n    HDS Github\n  </Link>\n  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n  laborum.\n</p>\n')),Object(l.b)("h3",{id:"standalone"},"Standalone"),Object(l.b)("p",null,"Standalone links are used on their own or directly after the content, and they are underlined. If you wish not to have an underline, consider using a button instead."),Object(l.b)("p",null,"Standalone links should not be used within sentences or paragraphs."),Object(l.b)(s.c,{__position:3,__code:"<Link\n  href=\"https://hds.hel.fi/\"\n  size=\"M\"\n  style={{ display: 'block', width: 'fit-content' }}\n>\n  Link to HDS\n</Link>",__scope:(t={props:g,DefaultLayout:o.a,Playground:s.c,Link:c.a,IconDocument:d.a,IconPhone:p.Db,IconEnvelope:p.t,IconPhoto:d.b,StatusLabel:r.a,LargeParagraph:b.a},t.DefaultLayout=o.a,t._frontmatter=u,t),mdxType:"Playground"},Object(l.b)(c.a,{href:"https://hds.hel.fi/",size:"M",style:{display:"block",width:"fit-content"},mdxType:"Link"},"Link to HDS")),Object(l.b)("h4",{id:"core-1"},"Core:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<a href="https://hds.hel.fi/" class="hds-link hds-link--medium" style="display:block;">Standalone link</a>\n')),Object(l.b)("h4",{id:"react-1"},"React:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"<Link href=\"https://hds.hel.fi/\" size=\"M\" style={{ display: 'block', width: 'fit-content' }}>\n  Link to HDS\n</Link>\n")),Object(l.b)("h3",{id:"internal-and-external-links"},"Internal and external links"),Object(l.b)("p",null,"All HDS links can either be internal or external. Internal links point to the currently active website. External links navigate to an entirely different site. You can also make the link open in a new tab."),Object(l.b)(s.c,{__position:4,__code:'<Link\n  href="https://hds.hel.fi/"\n  size="M"\n  style={{ display: \'block\', width: \'fit-content\' }}\n>\n  Internal link\n</Link>\n<Link\n  href="https://github.com/City-of-Helsinki/helsinki-design-system"\n  size="M"\n  external\n  openInExternalDomainAriaLabel="Opens a different website."\n  style={{ display: \'block\', width: \'fit-content\' }}\n>\n  External link\n</Link>\n\n<Link\n  href="https://github.com/City-of-Helsinki/helsinki-design-system"\n  size="M"\n  external\n  openInNewTab\n  openInExternalDomainAriaLabel="Opens a different website."\n  openInNewTabAriaLabel="Opens in a new tab."\n  style={{ display: \'block\', width: \'fit-content\' }}\n>\n  Link that opens in a new tab\n</Link>',__scope:(f={props:g,DefaultLayout:o.a,Playground:s.c,Link:c.a,IconDocument:d.a,IconPhone:p.Db,IconEnvelope:p.t,IconPhoto:d.b,StatusLabel:r.a,LargeParagraph:b.a},f.DefaultLayout=o.a,f._frontmatter=u,f),mdxType:"Playground"},Object(l.b)(c.a,{href:"https://hds.hel.fi/",size:"M",style:{display:"block",width:"fit-content"},mdxType:"Link"},"Internal link"),Object(l.b)(c.a,{href:"https://github.com/City-of-Helsinki/helsinki-design-system",size:"M",external:!0,openInExternalDomainAriaLabel:"Opens a different website.",style:{display:"block",width:"fit-content"},mdxType:"Link"},"External link"),Object(l.b)(c.a,{href:"https://github.com/City-of-Helsinki/helsinki-design-system",size:"M",external:!0,openInNewTab:!0,openInExternalDomainAriaLabel:"Opens a different website.",openInNewTabAriaLabel:"Opens in a new tab.",style:{display:"block",width:"fit-content"},mdxType:"Link"},"Link that opens in a new tab")),Object(l.b)("h4",{id:"core-2"},"Core:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<a href="https://hds.hel.fi/" class="hds-link hds-link--medium" style="display:block;">Internal link</a>\n\n<a href="https://github.com/City-of-Helsinki/helsinki-design-system" class="hds-link hds-link--medium" aria-label="Opens a different website.">\n  External link <i class="hds-icon icon hds-icon--link-external hds-icon--size-s vertical-align-small-or-medium-icon" aria-hidden="true"></i>\n</a>\n\n<a href="https://github.com/City-of-Helsinki/helsinki-design-system" class="hds-link hds-link--medium" rel="noopener" target="_blank" aria-label="Opens a different website. Opens in a new tab.">\n  Link that opens in a new tab <i class="hds-icon icon hds-icon--link-external hds-icon--size-xs vertical-align-small-or-medium-icon" aria-hidden="true"></i>\n</a>\n')),Object(l.b)("h4",{id:"react-2"},"React:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},'<Link \n  href="https://hds.hel.fi/" \n  size="M" \n  style={{ display: \'block\', width: \'fit-content\' }}\n>\n  Internal link\n</Link>\n\n<Link \n  href="https://github.com/City-of-Helsinki/helsinki-design-system" \n  size="M" \n  external\n  openInExternalDomainAriaLabel="Opens a different website."\n  style={{ display: \'block\', width: \'fit-content\' }}\n>\n  External link\n</Link>\n\n<Link \n  href="https://github.com/City-of-Helsinki/helsinki-design-system" \n  size="M" \n  external \n  openInNewTab\n  openInExternalDomainAriaLabel="Opens a different website."\n  openInNewTabAriaLabel="Opens in a new tab."\n  style={{ display: \'block\', width: \'fit-content\' }}>\n  Link that opens in a new tab\n</Link>\n')),Object(l.b)("h3",{id:"links-with-icons"},"Links with icons"),Object(l.b)("p",null,"HDS Links can be paired with an icon. This can be useful if the link has unusual target such as a phone number, an email address (mailto link), a PDF document or a photo."),Object(l.b)("p",null,"Note! These icons are meant to describe the link target. If you need a directional icon for the link (e.g. an arrow), you should instead use ",Object(l.b)("a",{parentName:"p",href:"/components/button#supplementary-button"},"a supplementary button")," with ",Object(l.b)("inlineCode",{parentName:"p"},'role="link"'),"."),Object(l.b)(s.c,{__position:5,__code:'<Link\n  iconLeft={<IconDocument size="s" aria-hidden />}\n  size="M"\n  href="/#"\n  style={{ display: \'block\', width: \'fit-content\' }}\n>\n  Document link\n</Link>\n<Link\n  iconLeft={<IconPhone size="s" aria-hidden />}\n  size="M"\n  href="/#"\n  style={{ display: \'block\', width: \'fit-content\' }}\n>\n  Phone link\n</Link>\n<Link\n  iconLeft={<IconEnvelope size="s" aria-hidden />}\n  size="M"\n  href="/#"\n  style={{ display: \'block\', width: \'fit-content\' }}\n>\n  Email link\n</Link>\n<Link\n  iconLeft={<IconPhoto size="s" aria-hidden />}\n  size="M"\n  href="/#"\n  style={{ display: \'block\', width: \'fit-content\' }}\n>\n  Photo link\n</Link>',__scope:(y={props:g,DefaultLayout:o.a,Playground:s.c,Link:c.a,IconDocument:d.a,IconPhone:p.Db,IconEnvelope:p.t,IconPhoto:d.b,StatusLabel:r.a,LargeParagraph:b.a},y.DefaultLayout=o.a,y._frontmatter=u,y),mdxType:"Playground"},Object(l.b)(c.a,{iconLeft:Object(l.b)(d.a,{size:"s","aria-hidden":!0,mdxType:"IconDocument"}),size:"M",href:"/#",style:{display:"block",width:"fit-content"},mdxType:"Link"},"Document link"),Object(l.b)(c.a,{iconLeft:Object(l.b)(p.Db,{size:"s","aria-hidden":!0,mdxType:"IconPhone"}),size:"M",href:"/#",style:{display:"block",width:"fit-content"},mdxType:"Link"},"Phone link"),Object(l.b)(c.a,{iconLeft:Object(l.b)(p.t,{size:"s","aria-hidden":!0,mdxType:"IconEnvelope"}),size:"M",href:"/#",style:{display:"block",width:"fit-content"},mdxType:"Link"},"Email link"),Object(l.b)(c.a,{iconLeft:Object(l.b)(d.b,{size:"s","aria-hidden":!0,mdxType:"IconPhoto"}),size:"M",href:"/#",style:{display:"block",width:"fit-content"},mdxType:"Link"},"Photo link")),Object(l.b)("h4",{id:"core-3"},"Core:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<a href="/#" class="hds-link hds-link--medium">\n  <span class="hds-icon-left"><i class="hds-icon hds-icon--document hds-icon--size-s" aria-hidden="true"></i></span>Document link\n</a>\n\n<a href="/#" class="hds-link hds-link--medium">\n  <span class="hds-icon-left"><i class="hds-icon hds-icon--phone hds-icon--size-s" aria-hidden="true"></i></span>Phone link\n</a>\n\n<a href="/#" class="hds-link hds-link--medium">\n  <span class="hds-icon-left"><i class="hds-icon hds-icon--envelope hds-icon--size-s" aria-hidden="true"></i></span>Envelope link\n</a>\n\n<a href="/#" class="hds-link hds-link--medium">\n  <span class="hds-icon-left"><i class="hds-icon hds-icon--photo hds-icon--size-s" aria-hidden="true"></i></span>Photo link\n</a>\n')),Object(l.b)("h4",{id:"react-3"},"React:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},'<Link iconLeft={<IconDocument size="s" aria-hidden />} size="M" href="/#" style={{ display: \'block\', width: \'fit-content\' }}>\n  Document link\n</Link>\n\n<Link iconLeft={<IconPhone size="s" aria-hidden />} size="M" href="/#" style={{ display: \'block\', width: \'fit-content\' }}>\n  Phone link\n</Link>\n\n<Link iconLeft={<IconEnvelope size="s" aria-hidden />} size="M" href="/#" style={{ display: \'block\', width: \'fit-content\' }}>\n  Email link\n</Link>\n\n<Link iconLeft={<IconPhoto size="s" aria-hidden />} size="M" href="/#" style={{ display: \'block\', width: \'fit-content\' }}>\n  Photo link\n</Link>\n')),Object(l.b)("h2",{id:"demos--api"},"Demos & API"),Object(l.b)("h3",{id:"core-4"},"Core"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/storybook/core/?path=/story/components-link--default"},"Link in hds-core")),Object(l.b)("h3",{id:"react-4"},"React"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/storybook/react/?path=/story/components-link--default"},"Link in hds-react")),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/storybook/react/?path=/docs/components-link--default"},"Link API")))}void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&!Object.prototype.hasOwnProperty.call(f,"__filemeta")&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/components/link.mdx"}}),f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-components-link-mdx-d95a8a899067704f59d4.js.map