import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replaceAll(
  'div className=\"pl-[56px] pt-1 mt-1\"',
  'div className=\"pt-1 mt-1\"'
);

content = content.replaceAll(
  'div className=\"pl-[56px] pt-1 mt-1 border-t border-gray-100 pt-2\"',
  'div className=\"pt-1 mt-1 border-t border-gray-100 pt-2\"'
);

content = content.replaceAll(
  '重新匹配或更正物品',
  '手动匹配'
);

content = content.replaceAll(
  'AI 视觉自动关联',
  '已自动关联'
);

content = content.replaceAll(
  'AI 语音自动关联',
  '已自动关联'
);

fs.writeFileSync('src/App.tsx', content);
