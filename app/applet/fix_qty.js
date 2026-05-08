const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

const target = `<div className="text-right shrink-0">
                          <div className="font-semibold text-gray-800 text-[16px]">x{item.quantity}</div>
                        </div>`;

const replacement = `<div className="flex items-center gap-1.5 shrink-0 bg-gray-50 rounded-lg p-1 border border-gray-100" onClick={(e) => e.stopPropagation()}>
                          <button 
                            className="w-7 h-7 flex items-center justify-center bg-white rounded shadow-sm text-gray-500 active:bg-gray-100"
                            onClick={() => {
                               const newResults = [...results];
                               if(newResults[idx].quantity > 1) {
                                 newResults[idx].quantity--;
                                 setResults(newResults);
                               }
                            }}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center font-semibold text-gray-800 text-[15px]">{item.quantity}</span>
                          <button 
                            className="w-7 h-7 flex items-center justify-center bg-white rounded shadow-sm text-gray-500 active:bg-gray-100"
                            onClick={() => {
                               const newResults = [...results];
                               newResults[idx].quantity++;
                               setResults(newResults);
                            }}
                          >
                            <Plus size={14} />
                          </button>
                        </div>`;

content = content.replaceAll(target, replacement);

fs.writeFileSync('src/App.tsx', content);
