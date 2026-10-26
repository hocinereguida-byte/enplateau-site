// Conserver un H1 unique dans le gabarit Astro, sans effacer les titres du Markdown.
export function rehypeHeadingHierarchy(){
  return (tree)=>{
    const visit=(node)=>{
      if(node?.type==='element' && node.tagName==='h1') node.tagName='h2';
      if(Array.isArray(node?.children)) node.children.forEach(visit);
    };
    visit(tree);
  };
}
