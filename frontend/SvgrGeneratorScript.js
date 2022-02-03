const propTypesTemplate = (
  { imports, interfaces, componentName, props, jsx, exports },

  { tpl }
) => {
  const component = `${componentName}: React.FC<any>`;
  return tpl`${imports}
  
  ${interfaces}
  
  const ${component} = (${props}) => ${jsx};
  ${exports}
  
  `;
};

module.exports = propTypesTemplate;
