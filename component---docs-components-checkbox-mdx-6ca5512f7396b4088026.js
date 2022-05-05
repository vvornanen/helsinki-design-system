(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{kNAa:function(e,c,n){"use strict";n.r(c),n.d(c,"_frontmatter",(function(){return g})),n.d(c,"default",(function(){return O}));var t=n("cxan"),o=n("zjfJ"),a=n("+wNj"),h=n("ERkP"),b=n("ZVZ0"),l=n("9Rvw"),r=n("qbsg"),k=n("7UOt"),d=n("NVVN"),s=n("U88L"),i=n("wA8m"),x=n("sQ7B"),u=n("vD+s"),p=n("x0e6"),C=(n("l1C2"),["components"]);function m(e,c){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);c&&(t=t.filter((function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable}))),n.push.apply(n,t)}return n}function y(e){for(var c=1;c<arguments.length;c++){var n=null!=arguments[c]?arguments[c]:{};c%2?m(Object(n),!0).forEach((function(c){Object(o.a)(e,c,n[c])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(c){Object.defineProperty(e,c,Object.getOwnPropertyDescriptor(n,c))}))}return e}var g={};void 0!==g&&g&&g===Object(g)&&Object.isExtensible(g)&&!Object.prototype.hasOwnProperty.call(g,"__filemeta")&&Object.defineProperty(g,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/components/checkbox.mdx"}});var v={_frontmatter:g},f=l.a;function O(e){var c,n,o,m=e.components,O=Object(a.a)(e,C);return Object(b.b)(f,Object(t.a)({},v,O,{components:m,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"checkbox"},"Checkbox"),Object(b.b)(k.a,{type:"info",mdxType:"StatusLabel"},"Stable"),Object(b.b)(k.a,{type:"success",style:{marginLeft:"var(--spacing-xs)"},mdxType:"StatusLabel"},"Accessible"),Object(b.b)(u.a,{mdxType:"LargeParagraph"},"Checkboxes are used to pick an option when one or more options can be chosen."),Object(b.b)("h2",{id:"principles"},"Principles"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"If the user can only select one option from a list, use ",Object(b.b)("a",{parentName:"li",href:"/components/radio-button"},"radio buttons")," instead."),Object(b.b)("li",{parentName:"ul"},"Checkbox label should always clearly describe what will happen if the specific option is chosen. A good practice is to keep labels a maximum of three words long."),Object(b.b)("li",{parentName:"ul"},"Checkboxes work independently from each other. This means that checking one option should never affect other checkboxes."),Object(b.b)("li",{parentName:"ul"},"If Checkboxes are related to each other, use ",Object(b.b)("a",{parentName:"li",href:"/components/selection-group"},"HDS Selection group")," to achieve that. "),Object(b.b)("li",{parentName:"ul"},"Checkboxes should not have any immediate effects. The checkbox selection takes effect when the user presses a submit button (e.g. in a form). If you need the selection to have an immediate effect, use ",Object(b.b)("a",{parentName:"li",href:"/components/toggle"},"HDS Toggle button component")," instead. Also see ",Object(b.b)("a",{parentName:"li",href:"/guidelines/checkboxes-radiobuttons-toggles"},"guidelines for choosing between radio buttons, checkboxes, and toggles."))),Object(b.b)("h2",{id:"accessibility"},"Accessibility"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"It is advisable to use colour combinations provided by the implementation.")," These combinations are ensured to comply with WCAG AA requirements. When customising colors, refer to ",Object(b.b)("a",{parentName:"li",href:"/design-tokens/colour",title:"Colour"},"colour guidelines")," to ensure accessibility."),Object(b.b)("li",{parentName:"ul"},"When multiple Checkboxes are related to each other, group them together using ",Object(b.b)("a",{parentName:"li",href:"/components/selection-group"},"HDS Selection group"),". Selection group also includes a title for the group.")),Object(b.b)("h2",{id:"usage"},"Usage"),Object(b.b)("h3",{id:"checkbox-with-label"},"Checkbox with label"),Object(b.b)(r.c,{__position:2,__code:'() => {\n  const [checkedItems, setCheckedItems] = React.useState({\n    \'checkbox-checked\': true,\n    \'checkbox-checked-disabled\': true,\n  })\n  const onChange = event => {\n    setCheckedItems({\n      ...checkedItems,\n      [event.target.id]: event.target.checked,\n    })\n  }\n  return (\n    <>\n      <Checkbox\n        label="Label"\n        id="checkbox"\n        checked={checkedItems[\'checkbox\']}\n        onChange={onChange}\n      />\n      <Checkbox\n        label="Label"\n        id="checkbox-checked"\n        checked={checkedItems[\'checkbox-checked\']}\n        onChange={onChange}\n      />\n      <Checkbox\n        label="Label"\n        id="checkbox-disabled"\n        checked={checkedItems[\'checkbox-disabled\']}\n        onChange={onChange}\n        disabled\n      />\n      <Checkbox\n        label="Label"\n        id="checkbox-checked-disabled"\n        checked={checkedItems[\'checkbox-checked-disabled\']}\n        onChange={onChange}\n        disabled\n      />\n    </>\n  )\n}',__scope:(c={props:O,DefaultLayout:l.a,Playground:r.c,useReducer:h.useReducer,Checkbox:d.a,SelectionGroup:s.a,StatusLabel:k.a,Fieldset:i.a,ColorBox:x.a,LargeParagraph:u.a,Text:p.a},c.DefaultLayout=l.a,c._frontmatter=g,c),mdxType:"Playground"},(function(){var e=h.useState({"checkbox-checked":!0,"checkbox-checked-disabled":!0}),c=e[0],n=e[1],t=function(e){var t;n(y(y({},c),{},((t={})[e.target.id]=e.target.checked,t)))};return Object(b.b)(h.Fragment,null,Object(b.b)(d.a,{label:"Label",id:"checkbox",checked:c.checkbox,onChange:t,mdxType:"Checkbox"}),Object(b.b)(d.a,{label:"Label",id:"checkbox-checked",checked:c["checkbox-checked"],onChange:t,mdxType:"Checkbox"}),Object(b.b)(d.a,{label:"Label",id:"checkbox-disabled",checked:c["checkbox-disabled"],onChange:t,disabled:!0,mdxType:"Checkbox"}),Object(b.b)(d.a,{label:"Label",id:"checkbox-checked-disabled",checked:c["checkbox-checked-disabled"],onChange:t,disabled:!0,mdxType:"Checkbox"}))})),Object(b.b)("h4",{id:"core-code-example"},"Core code example:"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Enabled --\x3e\n<div class="hds-checkbox">\n  <input type="checkbox" id="checkbox" class="hds-checkbox__input" />\n  <label for="checkbox"  class="hds-checkbox__label">Label</label>\n</div>\n\n\x3c!-- Enabled & selected --\x3e\n<div class="hds-checkbox">\n  <input type="checkbox" id="checkbox-checked" class="hds-checkbox__input" checked />\n  <label for="checkbox"  class="hds-checkbox__label">Label</label>\n</div>\n\n\x3c!-- Disabled --\x3e\n<div class="hds-checkbox">\n  <input type="checkbox" id="checkbox-disabled" class="hds-checkbox__input" disabled />\n  <label for="checkbox"  class="hds-checkbox__label">Label</label>\n</div>\n\n\x3c!-- Disabled & selected --\x3e\n<div class="hds-checkbox">\n  <input type="checkbox" id="checkbox-checked-disabled" class="hds-checkbox__input" checked disabled />\n  <label for="checkbox"  class="hds-checkbox__label">Label</label>\n</div>\n')),Object(b.b)("h4",{id:"react-code-example"},"React code example:"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-tsx"},'  {() => {\n    const [checkedItems, setCheckedItems] = React.useState({ "checkbox-checked": true, "checkbox-checked-disabled": true });\n    const onChange = (event) => {\n      setCheckedItems({ ...checkedItems, [event.target.id]: event.target.checked });\n    };\n    return <>\n      <Checkbox label="Label" id="checkbox" checked={checkedItems["checkbox"]} onChange={onChange} />\n      <Checkbox label="Label" id="checkbox-checked" checked={checkedItems["checkbox-checked"]} onChange={onChange} />\n      <Checkbox label="Label" id="checkbox-disabled" checked={checkedItems["checkbox-disabled"]} onChange={onChange} disabled />\n      <Checkbox label="Label" id="checkbox-checked-disabled" checked={checkedItems["checkbox-checked-disabled"]} onChange={onChange} disabled />\n    </>\n  }}\n')),Object(b.b)("h3",{id:"checkbox-group"},"Checkbox group"),Object(b.b)("p",null,"Related checkboxes can be grouped together with the Selection group component. See ",Object(b.b)("a",{parentName:"p",href:"/components/selection-group"},"HDS Selection group page")," for full documentation."),Object(b.b)(r.c,{__position:3,__code:'() => {\n  const [checkedItems, setCheckedItems] = React.useState({\n    \'v-checkbox1\': true,\n    \'v-checkbox2\': true,\n  })\n  const onChange = event => {\n    setCheckedItems({\n      ...checkedItems,\n      [event.target.name]: event.target.checked,\n    })\n  }\n  return (\n    <SelectionGroup label="Checkbox group">\n      <Checkbox\n        id="v-checkbox1"\n        name="v-checkbox1"\n        label="Option"\n        checked={checkedItems[\'v-checkbox1\']}\n        onChange={onChange}\n      />\n      <Checkbox\n        id="v-checkbox2"\n        name="v-checkbox2"\n        label="Option"\n        checked={checkedItems[\'v-checkbox2\']}\n        onChange={onChange}\n      />\n      <Checkbox\n        id="v-checkbox3"\n        name="v-checkbox3"\n        label="Option"\n        checked={checkedItems[\'v-checkbox3\']}\n        onChange={onChange}\n      />\n      <Checkbox\n        id="v-checkbox4"\n        name="v-checkbox4"\n        label="Option"\n        checked={checkedItems[\'v-checkbox4\']}\n        onChange={onChange}\n      />\n    </SelectionGroup>\n  )\n}',__scope:(n={props:O,DefaultLayout:l.a,Playground:r.c,useReducer:h.useReducer,Checkbox:d.a,SelectionGroup:s.a,StatusLabel:k.a,Fieldset:i.a,ColorBox:x.a,LargeParagraph:u.a,Text:p.a},n.DefaultLayout=l.a,n._frontmatter=g,n),mdxType:"Playground"},(function(){var e=h.useState({"v-checkbox1":!0,"v-checkbox2":!0}),c=e[0],n=e[1],t=function(e){var t;n(y(y({},c),{},((t={})[e.target.name]=e.target.checked,t)))};return Object(b.b)(s.a,{label:"Checkbox group",mdxType:"SelectionGroup"},Object(b.b)(d.a,{id:"v-checkbox1",name:"v-checkbox1",label:"Option",checked:c["v-checkbox1"],onChange:t,mdxType:"Checkbox"}),Object(b.b)(d.a,{id:"v-checkbox2",name:"v-checkbox2",label:"Option",checked:c["v-checkbox2"],onChange:t,mdxType:"Checkbox"}),Object(b.b)(d.a,{id:"v-checkbox3",name:"v-checkbox3",label:"Option",checked:c["v-checkbox3"],onChange:t,mdxType:"Checkbox"}),Object(b.b)(d.a,{id:"v-checkbox4",name:"v-checkbox4",label:"Option",checked:c["v-checkbox4"],onChange:t,mdxType:"Checkbox"}))})),Object(b.b)("h4",{id:"core-code-example-1"},"Core code example:"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-html"},'<fieldset class="hds-selection-group">\n  <legend class="hds-selection-group__legend">Checkbox group</legend>\n  <div class="hds-selection-group__items">\n    <div class="hds-selection-group__item">\n      <div class="hds-checkbox">\n        <input type="checkbox" id="v-checkbox1" name="v-checkbox1" class="hds-checkbox__input" value="foo" checked />\n        <label for="v-checkbox1" class="hds-checkbox__label">Option</label>\n      </div>\n    </div>\n    <div class="hds-selection-group__item">\n      <div class="hds-checkbox">\n        <input type="checkbox" id="v-checkbox2" name="v-checkbox2" class="hds-checkbox__input" value="bar" checked/>\n        <label for="v-checkbox2" class="hds-checkbox__label">Option</label>\n      </div>\n    </div>\n    <div class="hds-selection-group__item">\n      <div class="hds-checkbox">\n        <input type="checkbox" id="v-checkbox3" name="v-checkbox3" class="hds-checkbox__input" value="baz" />\n        <label for="v-checkbox3" class="hds-checkbox__label">Option</label>\n      </div>\n    </div>\n    <div class="hds-selection-group__item">\n      <div class="hds-checkbox">\n        <input type="checkbox" id="v-checkbox4" name="v-checkbox4" class="hds-checkbox__input" value="qux" />\n        <label for="v-checkbox4" class="hds-checkbox__label">Option</label>\n      </div>\n    </div>\n  </div>\n</fieldset>\n')),Object(b.b)("h4",{id:"react-code-example-1"},"React code example:"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-tsx"},'<SelectionGroup label="Checkbox group">\n  <Checkbox id="v-checkbox1" name="v-checkbox1" label="Option" checked />\n  <Checkbox id="v-checkbox2" name="v-checkbox2" label="Option" checked />\n  <Checkbox id="v-checkbox3" name="v-checkbox3" label="Option" />\n  <Checkbox id="v-checkbox4" name="v-checkbox4" label="Option" />\n</SelectionGroup>\n')),Object(b.b)("h3",{id:"indeterminate"},"Indeterminate"),Object(b.b)("p",null,'Checkboxes also have a "mixed" state that is called an indeterminate state. This state is meant to be between the checked and unchecked states. While not very common, the usual use case for the indeterminate state is nested checkboxes. The parent checkbox can be in the indeterminate state when only part of the children checkboxes are checked.'),Object(b.b)("p",null,"Note! You will always have to use JavaScript to set a checkbox to the indeterminate state. Currently, it cannot be done through HTML. The HDS React component will do this part automatically when the ",Object(b.b)("inlineCode",{parentName:"p"},"indeterminate")," property is given."),Object(b.b)(r.c,{__position:4,__code:"() => {\n  const CheckboxState = {\n    checked: 0,\n    unchecked: 1,\n    indeterminate: 2,\n  }\n  const areAllChecked = state => {\n    let checkedCount = 0\n    Object.keys(state).forEach(key => {\n      if (key === 'controllerCheckbox') {\n        return\n      }\n      if (state[key] === CheckboxState.checked) {\n        checkedCount += 1\n      }\n    })\n    return checkedCount === 4\n  }\n  const areAllUnchecked = state => {\n    let checkedCount = 0\n    Object.keys(state).forEach(key => {\n      if (key === 'controllerCheckbox') {\n        return\n      }\n      if (state[key] === CheckboxState.checked) {\n        checkedCount += 1\n      }\n    })\n    return checkedCount === 1\n  }\n  const reducer = (state, action) => {\n    switch (action.type) {\n      case 'check': {\n        if (action.payload === 'controllerCheckbox') {\n          return {\n            controllerCheckbox: CheckboxState.checked,\n            checkbox1: CheckboxState.checked,\n            checkbox2: CheckboxState.checked,\n            checkbox3: CheckboxState.checked,\n            checkbox4: CheckboxState.checked,\n            checkbox5: CheckboxState.checked,\n          }\n        }\n        return {\n          ...state,\n          [action.payload]: CheckboxState.checked,\n          controllerCheckbox: areAllChecked(state)\n            ? CheckboxState.checked\n            : CheckboxState.indeterminate,\n        }\n      }\n      case 'uncheck': {\n        if (action.payload === 'controllerCheckbox') {\n          return {\n            controllerCheckbox: CheckboxState.unchecked,\n            checkbox1: CheckboxState.unchecked,\n            checkbox2: CheckboxState.unchecked,\n            checkbox3: CheckboxState.unchecked,\n            checkbox4: CheckboxState.unchecked,\n            checkbox5: CheckboxState.unchecked,\n          }\n        }\n        return {\n          ...state,\n          [action.payload]: CheckboxState.unchecked,\n          controllerCheckbox: areAllUnchecked(state)\n            ? CheckboxState.unchecked\n            : CheckboxState.indeterminate,\n        }\n      }\n      default:\n        throw new Error()\n    }\n  }\n  const initialState = {\n    controllerCheckbox: CheckboxState.indeterminate,\n    checkbox1: CheckboxState.checked,\n    checkbox2: CheckboxState.checked,\n    checkbox3: CheckboxState.unchecked,\n    checkbox4: CheckboxState.checked,\n    checkbox5: CheckboxState.unchecked,\n  }\n  const [state, dispatch] = useReducer(reducer, initialState)\n  return (\n    <Fieldset heading=\"Group label *\">\n      <Checkbox\n        aria-controls=\"checkbox1 checkbox2 checkbox3 checkbox4 checkbox5\"\n        id=\"controllerCheckbox\"\n        label=\"Label\"\n        indeterminate={\n          state.controllerCheckbox === CheckboxState.indeterminate\n        }\n        checked={state.controllerCheckbox === CheckboxState.checked}\n        style={{ marginTop: 'var(--spacing-xs)' }}\n        onChange={() => {\n          if (\n            state.controllerCheckbox === CheckboxState.unchecked ||\n            state.controllerCheckbox === CheckboxState.indeterminate\n          ) {\n            dispatch({ type: 'check', payload: 'controllerCheckbox' })\n          } else {\n            dispatch({ type: 'uncheck', payload: 'controllerCheckbox' })\n          }\n        }}\n      />\n      <ul style={{ marginLeft: 'var(--spacing-s)', paddingInlineStart: '0' }}>\n        {Object.entries(state).map(entry => {\n          if (entry[0] === 'controllerCheckbox') {\n            return null\n          }\n          return (\n            <li\n              key={entry[0]}\n              style={{ marginTop: 'var(--spacing-s)', listStyle: 'none' }}\n            >\n              <Checkbox\n                id={entry[0]}\n                key={entry[0]}\n                label=\"Label\"\n                checked={entry[1] === CheckboxState.checked}\n                onChange={() => {\n                  if (entry[1] === CheckboxState.unchecked) {\n                    dispatch({ type: 'check', payload: entry[0] })\n                  } else {\n                    dispatch({ type: 'uncheck', payload: entry[0] })\n                  }\n                }}\n              />\n            </li>\n          )\n        })}\n      </ul>\n    </Fieldset>\n  )\n}",__scope:(o={props:O,DefaultLayout:l.a,Playground:r.c,useReducer:h.useReducer,Checkbox:d.a,SelectionGroup:s.a,StatusLabel:k.a,Fieldset:i.a,ColorBox:x.a,LargeParagraph:u.a,Text:p.a},o.DefaultLayout=l.a,o._frontmatter=g,o),mdxType:"Playground"},(function(){var e=0,c=1,n=2,t={controllerCheckbox:n,checkbox1:e,checkbox2:e,checkbox3:c,checkbox4:e,checkbox5:c},o=Object(h.useReducer)((function(t,o){switch(o.type){case"check":var a;return"controllerCheckbox"===o.payload?{controllerCheckbox:e,checkbox1:e,checkbox2:e,checkbox3:e,checkbox4:e,checkbox5:e}:y(y({},t),{},((a={})[o.payload]=e,a.controllerCheckbox=function(c){var n=0;return Object.keys(c).forEach((function(t){"controllerCheckbox"!==t&&c[t]===e&&(n+=1)})),4===n}(t)?e:n,a));case"uncheck":var h;return"controllerCheckbox"===o.payload?{controllerCheckbox:c,checkbox1:c,checkbox2:c,checkbox3:c,checkbox4:c,checkbox5:c}:y(y({},t),{},((h={})[o.payload]=c,h.controllerCheckbox=function(c){var n=0;return Object.keys(c).forEach((function(t){"controllerCheckbox"!==t&&c[t]===e&&(n+=1)})),1===n}(t)?c:n,h));default:throw new Error}}),t),a=o[0],l=o[1];return Object(b.b)(i.a,{heading:"Group label *",mdxType:"Fieldset"},Object(b.b)(d.a,{"aria-controls":"checkbox1 checkbox2 checkbox3 checkbox4 checkbox5",id:"controllerCheckbox",label:"Label",indeterminate:a.controllerCheckbox===n,checked:a.controllerCheckbox===e,style:{marginTop:"var(--spacing-xs)"},onChange:function(){a.controllerCheckbox===c||a.controllerCheckbox===n?l({type:"check",payload:"controllerCheckbox"}):l({type:"uncheck",payload:"controllerCheckbox"})},mdxType:"Checkbox"}),Object(b.b)("ul",{style:{marginLeft:"var(--spacing-s)",paddingInlineStart:"0"}},Object.entries(a).map((function(n){return"controllerCheckbox"===n[0]?null:Object(b.b)("li",{key:n[0],style:{marginTop:"var(--spacing-s)",listStyle:"none"}},Object(b.b)(d.a,{id:n[0],key:n[0],label:"Label",checked:n[1]===e,onChange:function(){n[1]===c?l({type:"check",payload:n[0]}):l({type:"uncheck",payload:n[0]})},mdxType:"Checkbox"}))}))))})),Object(b.b)("h4",{id:"core-code-example-2"},"Core code example:"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-html"},'<script>\n  function setIndeterminate() {\n    var checkbox = document.querySelector(\'#checkboxparent\');\n    checkbox.indeterminate = true;\n  }\n  function preventDefault(event) {\n    event.preventDefault();\n  }\n<\/script>\n<div onload="setIndeterminate()" class="hds-checkbox" onclick="preventDefault(event)">\n  <input\n    type="checkbox"\n    id="checkboxparent"\n    name="checkboxparent"\n    class="hds-checkbox__input"\n  />\n  <label for="checkboxparent"  class="hds-checkbox__label">Label</label>\n</div>\n')),Object(b.b)("h4",{id:"react-code-example-2"},"React code example:"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-tsx"},"{() => {\n  const CheckboxState = {\n    checked: 0,\n    unchecked: 1,\n    indeterminate: 2,\n  };\n  const areAllChecked = (state) => {\n    let checkedCount = 0;\n    Object.keys(state).forEach((key) => {\n      if (key === 'controllerCheckbox') {\n        return;\n      }\n      if (state[key] === CheckboxState.checked) {\n        checkedCount += 1;\n      }\n    });\n    return checkedCount === 4;\n  };\n  const areAllUnchecked = (state) => {\n    let checkedCount = 0;\n    Object.keys(state).forEach((key) => {\n      if (key === 'controllerCheckbox') {\n        return;\n      }\n      if (state[key] === CheckboxState.checked) {\n        checkedCount += 1;\n      }\n    });\n    return checkedCount === 1;\n  };\n  const reducer = (state, action) => {\n    switch (action.type) {\n      case 'check': {\n        if (action.payload === 'controllerCheckbox') {\n          return {\n            controllerCheckbox: CheckboxState.checked,\n            checkbox1: CheckboxState.checked,\n            checkbox2: CheckboxState.checked,\n            checkbox3: CheckboxState.checked,\n            checkbox4: CheckboxState.checked,\n            checkbox5: CheckboxState.checked,\n          };\n        }\n        return {\n          ...state,\n          [action.payload]: CheckboxState.checked,\n          controllerCheckbox: areAllChecked(state) ? CheckboxState.checked : CheckboxState.indeterminate,\n        };\n      }\n      case 'uncheck': {\n        if (action.payload === 'controllerCheckbox') {\n          return {\n            controllerCheckbox: CheckboxState.unchecked,\n            checkbox1: CheckboxState.unchecked,\n            checkbox2: CheckboxState.unchecked,\n            checkbox3: CheckboxState.unchecked,\n            checkbox4: CheckboxState.unchecked,\n            checkbox5: CheckboxState.unchecked,\n          };\n        }\n        return {\n          ...state,\n          [action.payload]: CheckboxState.unchecked,\n          controllerCheckbox: areAllUnchecked(state) ? CheckboxState.unchecked : CheckboxState.indeterminate,\n        };\n      }\n      default:\n        throw new Error();\n    }\n  };\n  const initialState = {\n    controllerCheckbox: CheckboxState.unchecked,\n    checkbox1: CheckboxState.unchecked,\n    checkbox2: CheckboxState.unchecked,\n    checkbox3: CheckboxState.unchecked,\n    checkbox4: CheckboxState.unchecked,\n    checkbox5: CheckboxState.unchecked,\n  };\n  const [state, dispatch] = useReducer(reducer, initialState);\n  return (\n    <Fieldset heading=\"Group label *\">\n      <Checkbox\n        aria-controls=\"checkbox1 checkbox2 checkbox3 checkbox4 checkbox5\"\n        id=\"controllerCheckbox\"\n        label=\"Label\"\n        indeterminate={state.controllerCheckbox === CheckboxState.indeterminate}\n        checked={state.controllerCheckbox === CheckboxState.checked}\n        style={{ marginTop: 'var(--spacing-xs)' }}\n        onChange={() => {\n          if (\n            state.controllerCheckbox === CheckboxState.unchecked ||\n            state.controllerCheckbox === CheckboxState.indeterminate\n          ) {\n            dispatch({ type: 'check', payload: 'controllerCheckbox' });\n          } else {\n            dispatch({ type: 'uncheck', payload: 'controllerCheckbox' });\n          }\n        }}\n      />\n      <ul style={{ marginLeft: 'var(--spacing-s)', paddingInlineStart: '0' }}>\n        {Object.entries(state).map((entry) => {\n          if (entry[0] === 'controllerCheckbox') {\n            return null;\n          }\n          return (\n            <li key={entry[0]} style={{ marginTop: 'var(--spacing-s)', listStyle: 'none' }}>\n              <Checkbox\n                id={entry[0]}\n                key={entry[0]}\n                label=\"Label\"\n                checked={entry[1] === CheckboxState.checked}\n                onChange={() => {\n                  if (entry[1] === CheckboxState.unchecked) {\n                    dispatch({ type: 'check', payload: entry[0] });\n                  } else {\n                    dispatch({ type: 'uncheck', payload: entry[0] });\n                  }\n                }}\n              />\n            </li>\n          );\n        })}\n      </ul>\n    </Fieldset>\n  );\n}}\n")),Object(b.b)("h2",{id:"demos--api"},"Demos & API"),Object(b.b)("h3",{id:"core"},"Core"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/storybook/core/?path=/story/components-checkbox--default"},"Checkboxes in hds-core")),Object(b.b)("h3",{id:"react"},"React"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/storybook/react/?path=/story/components-checkbox--default"},"Checkboxes in hds-react")),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/storybook/react/?path=/docs/components-checkbox--default"},"Checkbox API")))}void 0!==O&&O&&O===Object(O)&&Object.isExtensible(O)&&!Object.prototype.hasOwnProperty.call(O,"__filemeta")&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/components/checkbox.mdx"}}),O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-components-checkbox-mdx-6ca5512f7396b4088026.js.map