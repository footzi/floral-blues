function extractData(vnode, indx) {
    const cOpts = vnode.componentOptions;
      const data = {
      class: vnode.data.class,
      staticClass: vnode.data.staticClass,
      style: vnode.data.style,
      attrs: vnode.data.attrs,
      props: {
        ...cOpts.propsData,
        isClone: true,
        index: indx
      },
      on: cOpts.listeners,
      nativeOn: vnode.data.nativeOn,
      directives: vnode.data.directives,
      scopesSlots: vnode.data.scopesSlots,
      slot: vnode.data.slot,
      ref: vnode.data.ref,
      key: vnode.data.key ? `${indx}-clone` : undefined,
    };
    
    return data;
  }
  
  export function cloneSlide(vnode, indx) {
      // use the context that the original vnode was created in.
    const h = vnode.context && vnode.context.$createElement;
    const children =  vnode.componentOptions.children;
    
    const data = extractData(vnode, indx);
    
    const tag = vnode.componentOptions.Ctor;
    
    return h(tag, data, children)
  }