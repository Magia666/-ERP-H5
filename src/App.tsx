import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, FileEdit, ClipboardList, ArrowLeftRight, LayoutGrid, Home, ShoppingBag, PieChart, User, Search, Filter, Plus, Eye, Edit, FileText, Image as ImageIcon, Scan, Trash2, Minus, BarChart3, TrendingUp, TrendingDown, Package, Calendar, ChevronDown, Camera, Mic, LogOut, AlertCircle, RefreshCw } from 'lucide-react';

const ActionCard = ({ color, icon: Icon, label, desc, onClick }: { color: string, icon: React.ElementType, label: string, desc?: string, onClick?: () => void }) => (
  <div onClick={onClick} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#f8f9fc] active:bg-gray-100 transition-colors border border-gray-100/50">
    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white ${color} shadow-sm shrink-0`}>
      <Icon size={18} strokeWidth={2} />
    </div>
    <div className="flex flex-col">
      <span className="text-[13px] font-medium text-gray-800">{label}</span>
      <span className="text-[10px] text-gray-400 mt-0.5">{desc}</span>
    </div>
  </div>
);

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="bg-white rounded-2xl mx-3 mt-3 p-3 shadow-sm border border-gray-100/50">
    <div className="text-[14px] font-semibold text-gray-800 mb-2.5 flex items-center gap-1.5">
      <div className="w-1 h-3.5 bg-[#009bf5] rounded-full"></div>
      {title}
    </div>
    <div className="grid grid-cols-2 gap-2.5">
      {children}
    </div>
  </div>
);

const mockItems = [
  { id: '20448', name: '大米', aliases: ['东北大米', '五常大米', '白米'], category: '主食/粮油/--', creator: 'lsg2', date: '2026-04-10 09:12:00' },
  { id: '20447', name: '食用油', aliases: ['大豆油', '菜籽油', '色拉油'], category: '调料/粮油/--', creator: 'lsg2', date: '2026-04-10 09:15:30' },
  { id: '20446', name: '食用盐', aliases: ['盐', '海盐', '井盐'], category: '调料/配料/--', creator: 'lsg2', date: '2026-04-09 14:20:11' },
  { id: '20445', name: '酱油', aliases: ['生抽', '老抽', '味极鲜'], category: '调料/配料/--', creator: 'lsg2', date: '2026-04-09 14:22:45' },
  { id: '20444', name: '陈醋', aliases: ['醋', '香醋', '米醋'], category: '调料/配料/--', creator: 'lsg2', date: '2026-04-09 14:25:20' },
  { id: '20443', name: '面条', aliases: ['挂面', '手工面', '拉面'], category: '主食/干货/--', creator: 'lsg2', date: '2026-04-08 11:30:00' },
  { id: '20442', name: '洗洁精', aliases: ['餐具洗洁精', '洗碗精'], category: '耗材/清洁/--', creator: 'lsg2', date: '2026-04-05 16:45:12' },
  { id: '20441', name: '百洁布', aliases: ['洗碗布', '海绵擦', '抹布'], category: '耗材/清洁/--', creator: 'lsg2', date: '2026-04-05 16:48:33' },
  { id: '20440', name: '垃圾袋', aliases: ['黑色垃圾袋', '手提垃圾袋'], category: '耗材/日用/--', creator: 'lsg2', date: '2026-04-05 16:55:01' },
  { id: '20439', name: '扫把', aliases: ['扫帚', '扫地把'], category: '耗材/清洁/--', creator: 'lsg2', date: '2026-04-02 10:11:22' },
  { id: '20438', name: '拖把', aliases: ['海绵拖把', '平板拖把'], category: '耗材/清洁/--', creator: 'lsg2', date: '2026-04-02 10:15:44' },
  { id: '20437', name: '卷纸', aliases: ['卫生纸', '厕纸'], category: '耗材/日用/--', creator: 'lsg2', date: '2026-04-01 09:05:10' },
  { id: '20436', name: '抽纸', aliases: ['纸巾', '面巾纸', '洁柔抽纸'], category: '耗材/日用/--', creator: 'lsg2', date: '2026-04-01 09:10:25' },
  { id: '20435', name: '猪肉', aliases: ['五花肉', '瘦肉', '后腿肉'], category: '荤菜/食材/--', creator: 'lsg2', date: '2026-03-25 08:30:00' },
  { id: '20434', name: '牛肉', aliases: ['牛腩', '肥牛', '牛里脊'], category: '荤菜/食材/--', creator: 'lsg2', date: '2026-03-25 08:35:15' },
  { id: '20433', name: '锅铲', aliases: ['炒菜铲', '铁铲'], category: '耗材/厨具/--', creator: 'lsg2', date: '2026-03-19 16:33:28' },
  { id: '20432', name: '鸡蛋', aliases: ['土鸡蛋', '白皮蛋'], category: '荤菜/食材/--', creator: 'lsg2', date: '2026-01-22 13:18:27' },
  { id: '20431', name: '番茄', aliases: ['西红柿', '圣女果'], category: '素菜/蔬菜/--', creator: 'lsg2', date: '2026-01-22 13:17:15' },
  { id: '20430', name: '一次性杯', aliases: ['纸杯', '水杯', '一次性水杯', '一次性纸杯'], category: '耗材/餐具/--', creator: 'lsg2', date: '2026-01-21 16:54:43' },
  { id: '20429', name: '大虾', aliases: ['明虾', '基围虾', '虾'], category: '荤菜/食材/--', creator: 'lsg2', date: '2026-01-21 10:47:36' },
];

const ItemCard = ({ id, name, category, creator, date }: any) => (
  <div className="bg-white rounded-lg p-3 mb-2 shadow-sm flex gap-3">
    <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded flex flex-col items-center justify-center shrink-0 text-gray-300">
      <ImageIcon size={20} />
      <span className="text-[8px] mt-1 scale-90">暂无图片</span>
    </div>
    <div className="flex-1 flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <div>
          <div className="font-medium text-[15px] text-gray-800 leading-tight">{name}</div>
          <div className="text-[11px] text-gray-500 mt-1">{category}</div>
        </div>
        <div className="text-[12px] text-gray-500 bg-gray-50 px-1.5 py-0.5 rounded">#{id}</div>
      </div>
      <div className="flex justify-between items-end mt-2">
        <div className="text-[10px] text-gray-400 leading-tight">
          {creator} <br/> {date}
        </div>
        <div className="flex gap-3 text-[#2b85e4]">
          <div className="flex flex-col items-center gap-0.5 active:opacity-60">
            <Eye size={14} />
            <span className="text-[8px]">查看</span>
          </div>
          <div className="flex flex-col items-center gap-0.5 active:opacity-60">
            <Edit size={14} />
            <span className="text-[8px]">编辑</span>
          </div>
          <div className="flex flex-col items-center gap-0.5 active:opacity-60">
            <FileText size={14} />
            <span className="text-[8px]">记录</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ItemsView = ({ onNavigate }: { onNavigate?: (view: string) => void }) => (
  <div className="flex flex-col h-full w-full">
    {/* Header */}
    <div className="bg-[#009bf5] text-white flex items-center justify-between px-3 py-3 shrink-0">
      <button className="p-1 -ml-1 active:opacity-70">
        <ChevronLeft size={24} />
      </button>
      <h1 className="text-[17px] font-medium">物品管理</h1>
      <button className="p-1 -mr-1 active:opacity-70">
        <Filter size={20} />
      </button>
    </div>

    {/* Search & Add */}
    <div className="bg-white p-2 flex items-center gap-2 shadow-sm shrink-0">
      <div className="flex-1 bg-gray-100 rounded-full flex items-center px-3 py-1.5">
        <Search size={16} className="text-gray-400" />
        <input type="text" placeholder="搜索物品名称/序号/条码" className="bg-transparent border-none outline-none ml-2 text-sm w-full" />
      </div>
      <button onClick={() => onNavigate && onNavigate('add-item')} className="bg-[#2b85e4] text-white px-3 py-1.5 rounded-full text-sm flex items-center gap-1 shrink-0 active:bg-[#2374c7]">
        <Plus size={16} /> 添加
      </button>
    </div>

    {/* List Summary */}
    <div className="px-3 py-2 text-xs text-gray-500 shrink-0 flex justify-between items-center">
      <span>共 5 条</span>
      <label className="flex items-center gap-1.5">
        <input type="checkbox" className="rounded-sm accent-[#2b85e4]" defaultChecked /> 
        隐藏SKU
      </label>
    </div>

    {/* List */}
    <div className="flex-1 overflow-y-auto px-2 pb-20">
      {mockItems.map(item => <ItemCard key={item.id} {...item} />)}
    </div>
  </div>
);

const FormRow = ({ label, value, placeholder, required, isSelect, isInput }: any) => (
  <div className="flex items-center justify-between py-3.5 border-b border-gray-100 last:border-0 bg-white px-4">
    <div className="text-[14px] text-gray-700 whitespace-nowrap">
      {required && <span className="text-red-500 mr-1">*</span>}
      {label}
    </div>
    <div className="flex items-center text-[14px] text-gray-500 flex-1 justify-end ml-4">
      {isInput ? (
        <input type="text" placeholder={placeholder} className="text-right w-full outline-none text-gray-800" />
      ) : (
        <>
          {value ? <span className="text-gray-800">{value}</span> : <span className="text-gray-400">{placeholder}</span>}
          {isSelect && <ChevronRight size={16} className="ml-1 text-gray-400" />}
        </>
      )}
    </div>
  </div>
);

const ItemSelectorModal = ({ onClose, onConfirm }: { onClose: () => void, onConfirm: (selected: string[]) => void }) => {
  const [selected, setSelected] = useState<string[]>([]);
  const toggleSelect = (id: string) => {
    setSelected(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="fixed inset-0 bg-[#f5f5f5] z-50 flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="bg-[#009bf5] text-white flex items-center justify-between px-3 py-3 shrink-0">
        <button onClick={onClose} className="p-1 -ml-1 active:opacity-70">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-[17px] font-medium">选择物品</h1>
        <div className="w-8"></div>
      </div>

      {/* Search */}
      <div className="bg-white p-2 shadow-sm shrink-0">
        <div className="bg-gray-100 rounded-full flex items-center px-3 py-1.5">
          <Search size={16} className="text-gray-400" />
          <input type="text" placeholder="搜索物品名称/序号/条码" className="bg-transparent border-none outline-none ml-2 text-sm w-full" />
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto p-2 pb-20">
        {mockItems.map(item => (
          <div key={item.id} className="flex items-center p-3 bg-white mb-2 rounded-lg shadow-sm active:bg-gray-50" onClick={() => toggleSelect(item.id)}>
            <div className="mr-3">
              <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selected.includes(item.id) ? 'bg-[#009bf5] border-[#009bf5]' : 'border-gray-300'}`}>
                {selected.includes(item.id) && <div className="w-2.5 h-2.5 bg-white rounded-full"></div>}
              </div>
            </div>
            <div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded flex flex-col items-center justify-center shrink-0 text-gray-300 mr-3">
              <ImageIcon size={16} />
            </div>
            <div className="flex-1">
              <div className="font-medium text-[15px] text-gray-800 leading-tight">{item.name} <span className="text-[11px] text-gray-400 font-normal ml-1">#{item.id}</span></div>
              <div className="text-[11px] text-gray-500 mt-1">库存: 100 | {item.category}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="bg-white border-t border-gray-200 flex justify-between items-center px-4 py-2 shrink-0 absolute bottom-0 w-full pb-safe">
        <div className="text-[13px] text-gray-600">
          已选: <span className="text-[#009bf5] font-medium text-[16px] mx-1">{selected.length}</span> 种
        </div>
        <button onClick={() => onConfirm(selected)} className="bg-[#009bf5] text-white px-6 py-2 rounded-full text-[14px] font-medium active:bg-[#0085d4]">
          确定
        </button>
      </div>
    </div>
  );
};

const AddOutboundView = ({ onBack, initialItems = [] }: { onBack: () => void, initialItems?: any[] }) => {
  const [showItemSelector, setShowItemSelector] = useState(false);
  const [items, setItems] = useState<any[]>(initialItems);

  const totalQuantity = items.reduce((acc, item) => acc + (item.quantity || 0), 0);

  const handleUpdateQuantity = (idx: number, delta: number) => {
    const newItems = [...items];
    const newQty = Math.max(0, (newItems[idx].quantity || 0) + delta);
    newItems[idx].quantity = newQty;
    setItems(newItems);
  };

  const handleRemove = (idx: number) => {
    const newItems = [...items];
    newItems.splice(idx, 1);
    setItems(newItems);
  };

  return (
    <div className="flex flex-col h-full w-full bg-[#f5f5f5] relative">
      {/* Header */}
      <div className="bg-[#009bf5] text-white flex items-center justify-between px-3 py-3 shrink-0">
        <button onClick={onBack} className="p-1 -ml-1 active:opacity-70">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-[17px] font-medium">新增出库</h1>
        <div className="w-8"></div> {/* Spacer for centering */}
      </div>

      <div className="flex-1 overflow-y-auto pb-20">
        {/* Form Section */}
        <div className="mt-2 shadow-sm">
          <FormRow label="仓库" value="楼上仓库" required isSelect />
          <FormRow label="出库类型" value="发货出库" required isSelect />
          <FormRow label="订单备注" placeholder="请输入备注信息" isInput />
        </div>

        {/* Scan/Add Section */}
        <div className="bg-white mt-2 p-3 shadow-sm">
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
            <Scan size={18} className="text-[#009bf5]" />
            <input 
              type="text" 
              placeholder="扫码/输入条码快速添加物品" 
              className="bg-transparent border-none outline-none text-[13px] flex-1"
            />
          </div>
          <div className="flex gap-3 mt-3">
            <button onClick={() => setShowItemSelector(true)} className="flex-1 bg-[#2b85e4] text-white py-2 rounded-lg text-[14px] flex items-center justify-center gap-1 active:bg-[#2374c7]">
              <Plus size={16} /> 添加物品
            </button>
            <button className="flex-1 bg-white border border-gray-300 text-gray-700 py-2 rounded-lg text-[14px] active:bg-gray-50">
              打印标签
            </button>
          </div>
        </div>

        {/* Added Items List */}
        <div className="px-3 py-2 text-[12px] text-gray-500 flex justify-between mt-1">
          <span>已添加出库物品</span>
          <span>共 {items.length} 种</span>
        </div>

        <div className="px-2">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white p-3 rounded-lg shadow-sm mb-2">
              <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-2">
                <div className="font-medium text-[15px] text-gray-800">
                  {item.name} 
                  {item.id ? (
                    <span className="text-[11px] text-gray-400 ml-1 font-normal">#{item.id}</span>
                  ) : (
                    <span className="text-[11px] text-orange-500 ml-1 font-medium bg-orange-50 px-1 py-0.5 rounded">未建档物品</span>
                  )}
                </div>
                <button onClick={() => handleRemove(idx)} className="p-1 active:opacity-50">
                  <Trash2 size={16} className="text-red-500" />
                </button>
              </div>
              
              <div className="flex gap-3">
                <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded flex flex-col items-center justify-center shrink-0 text-gray-300">
                  <ImageIcon size={20} />
                  <span className="text-[8px] mt-1 scale-90">暂无图片</span>
                </div>
                <div className="flex-1 text-[11px] text-gray-500 space-y-1">
                  <div className="flex justify-between">
                    <span>规格: {item.spec || '无'}</span>
                    <span>货号: {item.itemNo || '无'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>类目: {item.category?.split('/')[0] || '默认'}</span>
                    <span>SKU: {item.sku || '无'}</span>
                  </div>
                  <div className="text-gray-400 mt-1">
                    可用库存: <span className="text-gray-800 font-medium">{item.stock || 0}</span> &nbsp;|&nbsp; 冻结: 0
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between pt-2 border-t border-gray-50">
                <input 
                  type="text" 
                  placeholder="物品备注..." 
                  className="bg-gray-50 text-[12px] px-2 py-1.5 rounded w-[45%] outline-none border border-gray-100" 
                />
                <div className="flex items-center border border-gray-200 rounded h-7">
                  <button onClick={() => handleUpdateQuantity(idx, -1)} className="w-8 h-full flex items-center justify-center text-gray-500 active:bg-gray-100">
                    <Minus size={14} />
                  </button>
                  <div className="w-10 h-full flex items-center justify-center border-l border-r border-gray-200 text-[13px] font-medium">
                    {item.quantity || 0}
                  </div>
                  <button onClick={() => handleUpdateQuantity(idx, 1)} className="w-8 h-full flex items-center justify-center text-gray-500 active:bg-gray-100">
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="bg-white border-t border-gray-200 flex justify-between items-center px-4 py-2 shrink-0 absolute bottom-0 w-full max-w-md pb-safe z-20 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        <div className="text-[12px] text-gray-600">
          合计数量: <span className="text-[#ff9900] text-[18px] font-medium ml-1">{totalQuantity}</span>
        </div>
        <button className="bg-[#009bf5] text-white px-6 py-2 rounded-full text-[14px] font-medium active:bg-[#0085d4]">
          确认出库
        </button>
      </div>

      {/* Item Selector Modal */}
      {showItemSelector && (
        <ItemSelectorModal 
          onClose={() => setShowItemSelector(false)} 
          onConfirm={(selected) => {
            console.log('Selected items:', selected);
            setShowItemSelector(false);
          }} 
        />
      )}
    </div>
  );
};

const mockOutboundOrders = [
  {
    id: 'SDCK202603100002',
    warehouse: '楼上仓库',
    type: '发货出库',
    operator: 'lsg2',
    date: '2026-03-10 15:02:02',
    items: [
      { id: '25238', name: '番茄', spec: '番茄', itemNo: 'fq01', category: '蔬菜', sku: 'SC0203', quantity: 4 }
    ],
    totalKinds: 1,
    totalQuantity: 4
  },
  {
    id: 'SDCK202603100001',
    warehouse: '楼上仓库',
    type: '发货出库',
    operator: 'lsg2',
    date: '2026-03-10 15:00:02',
    items: [
      { id: '25238', name: '番茄', spec: '番茄', itemNo: 'fq01', category: '蔬菜', sku: 'SC0203', quantity: 3 }
    ],
    totalKinds: 1,
    totalQuantity: 3
  },
  {
    id: 'SDCK202603090002',
    warehouse: '楼上仓库',
    type: '发货出库',
    operator: 'lsg2',
    date: '2026-03-09 09:50:46',
    items: [
      { id: '25237', name: '一次性杯', spec: '小杯', itemNo: 'ycxb001', category: '餐具', sku: 'HC0202', quantity: 1 }
    ],
    totalKinds: 1,
    totalQuantity: 1
  }
];

const OutboundOrderCard = ({ order }: { order: any; key?: React.Key }) => (
  <div className="bg-white rounded-lg mb-3 shadow-sm overflow-hidden">
    {/* Order Header */}
    <div className="px-3 py-2.5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
      <div className="flex items-center gap-2">
        <span className="text-[13px] font-medium text-[#2b85e4]">{order.id}</span>
      </div>
      <span className="text-[11px] text-[#009bf5] bg-[#e6f5ff] px-2 py-0.5 rounded">{order.type}</span>
    </div>

    {/* Order Info */}
    <div className="px-3 py-2 text-[12px] text-gray-500 flex justify-between border-b border-gray-50">
      <div className="flex flex-col gap-1">
        <span>仓库: <span className="text-gray-800">{order.warehouse}</span></span>
        <span>操作人: <span className="text-gray-800">{order.operator}</span></span>
      </div>
      <div className="flex flex-col gap-1 text-right">
        <span>{order.date.split(' ')[0]}</span>
        <span>{order.date.split(' ')[1]}</span>
      </div>
    </div>

    {/* Items List (Simplified for mobile) */}
    <div className="px-3 py-2 bg-gray-50/30">
      {order.items.map((item: any, idx: number) => (
        <div key={idx} className="flex items-center justify-between py-1.5 border-b border-gray-100 last:border-0">
          <div className="flex items-center gap-2 flex-1">
            <div className="w-10 h-10 bg-white border border-gray-100 rounded flex items-center justify-center text-gray-300 shrink-0">
              <ImageIcon size={14} />
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] text-gray-800 font-medium">{item.name}</span>
              <span className="text-[10px] text-gray-400">规格: {item.spec} | 货号: {item.itemNo}</span>
            </div>
          </div>
          <div className="text-[14px] font-medium text-gray-800">
            x{item.quantity}
          </div>
        </div>
      ))}
    </div>

    {/* Order Footer */}
    <div className="px-3 py-2.5 flex justify-between items-center border-t border-gray-100">
      <div className="text-[11px] text-gray-500">
        出库种类: <span className="text-gray-800">{order.totalKinds}</span> &nbsp;
        总数量: <span className="text-[#ff9900] font-medium text-[14px]">{order.totalQuantity}</span>
      </div>
      <button className="text-[12px] text-[#2b85e4] border border-[#2b85e4] px-3 py-1 rounded active:bg-[#e6f0f9]">
        详情
      </button>
    </div>
  </div>
);

const OutboundListView = ({ onBack, onNavigate }: { onBack: () => void, onNavigate: (view: string) => void }) => {
  const [activeFilter, setActiveFilter] = useState('全部');
  const filters = ['全部', '发货出库', '报损出库', '退货出库', '线下出库'];

  return (
    <div className="flex flex-col h-full w-full bg-[#f5f5f5]">
      {/* Header */}
      <div className="bg-[#009bf5] text-white flex items-center justify-between px-3 py-3 shrink-0">
        <button onClick={onBack} className="p-1 -ml-1 active:opacity-70">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-[17px] font-medium">出库单管理</h1>
        <button className="p-1 -mr-1 active:opacity-70">
          <Filter size={20} />
        </button>
      </div>

      {/* Search */}
      <div className="bg-white p-2 shadow-sm shrink-0">
        <div className="bg-gray-100 rounded-full flex items-center px-3 py-1.5">
          <Search size={16} className="text-gray-400" />
          <input type="text" placeholder="搜索出库单号/货号/SKU" className="bg-transparent border-none outline-none ml-2 text-sm w-full" />
        </div>
      </div>

      {/* Horizontal Filter Scroll */}
      <div className="bg-white border-b border-gray-100 shrink-0">
        <div className="flex overflow-x-auto hide-scrollbar px-2 py-2 gap-2">
          {filters.map(f => (
            <button 
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`whitespace-nowrap px-3 py-1 rounded-full text-[12px] transition-colors ${activeFilter === f ? 'bg-[#2b85e4] text-white' : 'bg-gray-100 text-gray-600'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* List Summary */}
      <div className="px-3 py-2 text-xs text-gray-500 shrink-0 flex justify-between items-center">
        <span>共 3 条记录</span>
        <span className="flex items-center gap-1 text-[#2b85e4] active:opacity-70">
          <Filter size={12} /> 高级筛选
        </span>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-2 pb-6">
        {mockOutboundOrders.map(order => <OutboundOrderCard key={order.id} order={order} />)}
      </div>
    </div>
  );
};

const AddInboundView = ({ onBack, initialItems = [] }: { onBack: () => void, initialItems?: any[] }) => {
  const [showItemSelector, setShowItemSelector] = useState(false);
  const [items, setItems] = useState<any[]>(initialItems);

  const totalQuantity = items.reduce((acc, item) => acc + (item.quantity || 0), 0);

  const handleUpdateQuantity = (idx: number, delta: number) => {
    const newItems = [...items];
    const newQty = Math.max(0, (newItems[idx].quantity || 0) + delta);
    newItems[idx].quantity = newQty;
    setItems(newItems);
  };

  const handleRemove = (idx: number) => {
    const newItems = [...items];
    newItems.splice(idx, 1);
    setItems(newItems);
  };

  return (
    <div className="flex flex-col h-full w-full bg-[#f5f5f5] relative">
      {/* Header */}
      <div className="bg-[#009bf5] text-white flex items-center justify-between px-3 py-3 shrink-0">
        <button onClick={onBack} className="p-1 -ml-1 active:opacity-70">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-[17px] font-medium">新增入库</h1>
        <div className="w-8"></div>
      </div>

      <div className="flex-1 overflow-y-auto pb-20">
        {/* Form Section */}
        <div className="mt-2 shadow-sm">
          <FormRow label="仓库" value="楼上仓库" required isSelect />
          <FormRow label="入库类型" value="生产入库" required isSelect />
          <FormRow label="订单备注" placeholder="请输入备注信息" isInput />
        </div>

        {/* Scan/Add Section */}
        <div className="bg-white mt-2 p-3 shadow-sm">
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
            <Scan size={18} className="text-[#009bf5]" />
            <input 
              type="text" 
              placeholder="扫码/输入条码快速添加物品" 
              className="bg-transparent border-none outline-none text-[13px] flex-1"
            />
          </div>
          <div className="flex gap-3 mt-3">
            <button onClick={() => setShowItemSelector(true)} className="flex-1 bg-[#2b85e4] text-white py-2 rounded-lg text-[14px] flex items-center justify-center gap-1 active:bg-[#2374c7]">
              <Plus size={16} /> 添加物品
            </button>
            <button className="flex-1 bg-white border border-gray-300 text-gray-700 py-2 rounded-lg text-[14px] active:bg-gray-50">
              移除
            </button>
          </div>
        </div>

        {/* Added Items List */}
        <div className="px-3 py-2 text-[12px] text-gray-500 flex justify-between mt-1">
          <span>已入库物品清单</span>
          <span>共 {items.length} 种</span>
        </div>

        <div className="px-2">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white p-3 rounded-lg shadow-sm mb-2">
              <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-2">
                <div className="font-medium text-[15px] text-gray-800">
                  {item.name} 
                  {item.id ? (
                    <span className="text-[11px] text-gray-400 ml-1 font-normal">#{item.id}</span>
                  ) : (
                    <span className="text-[11px] text-orange-500 ml-1 font-medium bg-orange-50 px-1 py-0.5 rounded">未建档物品(按新物品新建)</span>
                  )}
                </div>
                <button onClick={() => handleRemove(idx)} className="p-1 active:opacity-50">
                  <Trash2 size={16} className="text-red-500" />
                </button>
              </div>
              
              <div className="flex gap-3">
                <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded flex flex-col items-center justify-center shrink-0 text-gray-300">
                  <ImageIcon size={20} />
                  <span className="text-[8px] mt-1 scale-90">暂无图片</span>
                </div>
                <div className="flex-1 text-[11px] text-gray-500 space-y-1">
                  <div className="flex justify-between">
                    <span>规格: {item.spec || '无'}</span>
                    <span>货号: {item.itemNo || '无'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>类目: {item.category?.split('/')[0] || '默认'}</span>
                    <span>SKU: {item.sku || '无'}</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 pt-2 border-t border-gray-50">
                <div className="flex items-center justify-between col-span-2">
                  <span className="text-[12px] text-gray-600">入库数量</span>
                  <div className="flex items-center border border-gray-200 rounded h-7">
                    <button onClick={() => handleUpdateQuantity(idx, -1)} className="w-8 h-full flex items-center justify-center text-gray-500 active:bg-gray-100">
                      <Minus size={14} />
                    </button>
                    <div className="w-10 h-full flex items-center justify-center border-l border-r border-gray-200 text-[13px] font-medium">
                      {item.quantity || 0}
                    </div>
                    <button onClick={() => handleUpdateQuantity(idx, 1)} className="w-8 h-full flex items-center justify-center text-gray-500 active:bg-gray-100">
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <input type="text" placeholder="损耗" className="bg-gray-50 text-[12px] px-2 py-1.5 rounded outline-none border border-gray-100" />
                <input type="text" placeholder="成本单价(元)" className="bg-gray-50 text-[12px] px-2 py-1.5 rounded outline-none border border-gray-100" />
                <input type="text" placeholder="存储位置" className="bg-gray-50 text-[12px] px-2 py-1.5 rounded outline-none border border-gray-100" />
                <input type="text" placeholder="批次号" className="bg-gray-50 text-[12px] px-2 py-1.5 rounded outline-none border border-gray-100" />
                <input type="text" placeholder="物品备注..." className="bg-gray-50 text-[12px] px-2 py-1.5 rounded outline-none border border-gray-100 col-span-2" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="bg-white border-t border-gray-200 flex justify-between items-center px-4 py-2 shrink-0 absolute bottom-0 w-full max-w-md pb-safe z-20 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        <div className="text-[12px] text-gray-600 flex flex-col">
          <span>入库总数量: <span className="text-[#ff9900] text-[15px] font-medium ml-1">{totalQuantity}</span></span>
          <span>总金额: <span className="text-[#ff9900] text-[15px] font-medium ml-1">0.00</span></span>
        </div>
        <button className="bg-[#009bf5] text-white px-8 py-2 rounded-full text-[14px] font-medium active:bg-[#0085d4]">
          保存
        </button>
      </div>

      {showItemSelector && (
        <ItemSelectorModal 
          onClose={() => setShowItemSelector(false)} 
          onConfirm={(selected) => setShowItemSelector(false)} 
        />
      )}
    </div>
  );
};

const mockInboundOrders = [
  {
    id: 'SDRK202603100001',
    warehouse: '楼上仓库',
    type: '生产入库',
    status: '已完成',
    operator: 'lsg2',
    date: '2026-03-10 15:02:58',
    items: [
      { id: '25238', name: '番茄', spec: '番茄', itemNo: 'fq01', category: '蔬菜', sku: 'SC0203', quantity: '6 公斤', loss: '0 公斤', price: '0', total: '0' }
    ],
    totalKinds: 1,
    totalAmount: '0 元'
  },
  {
    id: 'SDRK202601210001',
    warehouse: '贺州冰鲜仓库1号',
    type: '生产入库',
    status: '已完成',
    operator: 'lsg2',
    date: '2026-01-21 17:06:30',
    items: [
      { id: '25237', name: '一次性杯', spec: '小杯', itemNo: 'ycxb001', category: '餐具', sku: 'HC0202', quantity: '10 包', loss: '1 包', price: '1', total: '10' }
    ],
    totalKinds: 1,
    totalAmount: '10 元'
  }
];

const InboundOrderCard = ({ order }: { order: any; key?: React.Key }) => (
  <div className="bg-white rounded-lg mb-3 shadow-sm overflow-hidden">
    {/* Order Header */}
    <div className="px-3 py-2.5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
      <div className="flex items-center gap-2">
        <span className="text-[13px] font-medium text-[#2b85e4]">{order.id}</span>
      </div>
      <div className="flex gap-2">
        <span className="text-[11px] text-[#009bf5] bg-[#e6f5ff] px-2 py-0.5 rounded">{order.type}</span>
        <span className="text-[11px] text-[#19be6b] bg-[#e8f8f0] px-2 py-0.5 rounded">{order.status}</span>
      </div>
    </div>

    {/* Order Info */}
    <div className="px-3 py-2 text-[12px] text-gray-500 flex justify-between border-b border-gray-50">
      <div className="flex flex-col gap-1">
        <span>仓库: <span className="text-gray-800">{order.warehouse}</span></span>
        <span>操作人: <span className="text-gray-800">{order.operator}</span></span>
      </div>
      <div className="flex flex-col gap-1 text-right">
        <span>{order.date.split(' ')[0]}</span>
        <span>{order.date.split(' ')[1]}</span>
      </div>
    </div>

    {/* Items List */}
    <div className="px-3 py-2 bg-gray-50/30">
      {order.items.map((item: any, idx: number) => (
        <div key={idx} className="flex flex-col py-1.5 border-b border-gray-100 last:border-0">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white border border-gray-100 rounded flex items-center justify-center text-gray-300 shrink-0">
              <ImageIcon size={14} />
            </div>
            <div className="flex flex-col flex-1">
              <span className="text-[13px] text-gray-800 font-medium">{item.name}</span>
              <span className="text-[10px] text-gray-400">规格: {item.spec} | 货号: {item.itemNo}</span>
            </div>
            <div className="text-[13px] font-medium text-[#19be6b]">
              +{item.quantity}
            </div>
          </div>
          <div className="flex justify-between text-[10px] text-gray-500 mt-2 bg-white p-1.5 rounded border border-gray-50">
            <span>损耗: {item.loss}</span>
            <span>单价: ¥{item.price}</span>
            <span>金额: ¥{item.total}</span>
          </div>
        </div>
      ))}
    </div>

    {/* Order Footer */}
    <div className="px-3 py-2.5 flex justify-between items-center border-t border-gray-100">
      <div className="text-[11px] text-gray-500">
        入库种类: <span className="text-gray-800">{order.totalKinds}</span> &nbsp;
        总金额: <span className="text-[#ff9900] font-medium text-[14px]">{order.totalAmount}</span>
      </div>
      <div className="flex gap-2">
        <button className="text-[12px] text-gray-600 border border-gray-300 px-3 py-1 rounded active:bg-gray-50">
          记录
        </button>
        <button className="text-[12px] text-[#2b85e4] border border-[#2b85e4] px-3 py-1 rounded active:bg-[#e6f0f9]">
          详情
        </button>
      </div>
    </div>
  </div>
);

const InboundListView = ({ onBack }: { onBack: () => void }) => {
  const [activeFilter, setActiveFilter] = useState('全部');
  const filters = ['全部', '待审核', '已完成', '未通过'];

  return (
    <div className="flex flex-col h-full w-full bg-[#f5f5f5]">
      {/* Header */}
      <div className="bg-[#009bf5] text-white flex items-center justify-between px-3 py-3 shrink-0">
        <button onClick={onBack} className="p-1 -ml-1 active:opacity-70">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-[17px] font-medium">入库单管理</h1>
        <button className="p-1 -mr-1 active:opacity-70">
          <Filter size={20} />
        </button>
      </div>

      {/* Search */}
      <div className="bg-white p-2 shadow-sm shrink-0">
        <div className="bg-gray-100 rounded-full flex items-center px-3 py-1.5">
          <Search size={16} className="text-gray-400" />
          <input type="text" placeholder="搜索入库单号/货号/SKU" className="bg-transparent border-none outline-none ml-2 text-sm w-full" />
        </div>
      </div>

      {/* Horizontal Filter Scroll */}
      <div className="bg-white border-b border-gray-100 shrink-0">
        <div className="flex overflow-x-auto hide-scrollbar px-2 py-2 gap-2">
          {filters.map(f => (
            <button 
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`whitespace-nowrap px-3 py-1 rounded-full text-[12px] transition-colors ${activeFilter === f ? 'bg-[#2b85e4] text-white' : 'bg-gray-100 text-gray-600'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* List Summary */}
      <div className="px-3 py-2 text-xs text-gray-500 shrink-0 flex justify-between items-center">
        <span>共 2 条记录</span>
        <span className="flex items-center gap-1 text-[#2b85e4] active:opacity-70">
          <Filter size={12} /> 高级筛选
        </span>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-2 pb-6">
        {mockInboundOrders.map(order => <InboundOrderCard key={order.id} order={order} />)}
      </div>
    </div>
  );
};

const mockPurchases = [
  {
    id: 'CG202603190002',
    warehouse: '楼上仓库',
    note: '加急',
    purchaser: '老树根',
    items: ['鸡蛋(鸡蛋)', '锅铲(大锅铲)'],
    totalQuantity: 2,
    totalAmount: '0 元',
    expectedArrival: '2026-03-19',
    status: '未审核',
    date: '2026-03-19 16:51:04'
  },
  {
    id: 'CG202603190001',
    warehouse: '楼上仓库',
    note: '',
    purchaser: '老树根',
    items: ['鸡蛋(鸡蛋)', '番茄(番茄)', '一次性杯(小杯)'],
    totalQuantity: 4,
    totalAmount: '0 元',
    expectedArrival: '2026-03-19',
    status: '未审核',
    date: '2026-03-19 15:40:39'
  },
  {
    id: 'CG202603020003',
    warehouse: '楼上仓库',
    note: '',
    purchaser: '老树根',
    items: ['鸡蛋(鸡蛋)'],
    totalQuantity: 1,
    totalAmount: '100 元',
    expectedArrival: '2026-03-25',
    status: '采购中',
    date: '2026-03-02 17:21:12'
  }
];

const PurchaseOrderCard = ({ order }: { order: any; key?: React.Key }) => (
  <div className="bg-white rounded-lg mb-3 shadow-sm overflow-hidden">
    {/* Order Header */}
    <div className="px-3 py-2.5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
      <div className="flex items-center gap-2">
        <span className="text-[13px] font-medium text-[#2b85e4]">{order.id}</span>
        {order.note && <span className="text-[10px] text-red-500 border border-red-200 bg-red-50 px-1 rounded">{order.note}</span>}
      </div>
      <span className={`text-[11px] px-2 py-0.5 rounded ${order.status === '未审核' ? 'text-[#ff9900] bg-[#fff5e6]' : 'text-[#19be6b] bg-[#e8f8f0]'}`}>
        {order.status}
      </span>
    </div>

    {/* Order Info */}
    <div className="px-3 py-2 text-[12px] text-gray-500 flex justify-between border-b border-gray-50">
      <div className="flex flex-col gap-1">
        <span>仓库: <span className="text-gray-800">{order.warehouse}</span></span>
        <span>采购员: <span className="text-gray-800">{order.purchaser}</span></span>
      </div>
      <div className="flex flex-col gap-1 text-right">
        <span>{order.date.split(' ')[0]}</span>
        <span>{order.date.split(' ')[1]}</span>
      </div>
    </div>

    {/* Items Summary */}
    <div className="px-3 py-2 bg-gray-50/30 text-[12px] text-gray-600">
      <div className="mb-1">采购物品: <span className="text-gray-800">{order.items.join(', ')}{order.items.length > 2 ? '...' : ''}</span></div>
      <div className="flex justify-between mt-2 text-[11px]">
        <span>预计到货: {order.expectedArrival}</span>
      </div>
    </div>

    {/* Order Footer */}
    <div className="px-3 py-2.5 flex justify-between items-center border-t border-gray-100">
      <div className="text-[11px] text-gray-500 flex flex-col">
        <span>物品数量: <span className="text-gray-800">{order.totalQuantity}</span></span>
        <span>汇总金额: <span className="text-[#ff9900] font-medium">{order.totalAmount}</span></span>
      </div>
      <div className="flex gap-2">
        <button className="text-[12px] text-gray-600 border border-gray-300 px-3 py-1 rounded active:bg-gray-50">
          编辑
        </button>
        <button className="text-[12px] text-[#2b85e4] border border-[#2b85e4] px-3 py-1 rounded active:bg-[#e6f0f9]">
          详情
        </button>
      </div>
    </div>
  </div>
);

const PurchaseListView = ({ onBack }: { onBack: () => void }) => {
  const [activeFilter, setActiveFilter] = useState('全部');
  const filters = ['全部', '未审核(5)', '采购中(3)', '审核未通过(0)', '已完成(3)', '已驳回(0)', '作废(0)'];

  return (
    <div className="flex flex-col h-full w-full bg-[#f5f5f5]">
      {/* Header */}
      <div className="bg-[#009bf5] text-white flex items-center justify-between px-3 py-3 shrink-0">
        <button onClick={onBack} className="p-1 -ml-1 active:opacity-70">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-[17px] font-medium">我的采购</h1>
        <button className="p-1 -mr-1 active:opacity-70">
          <Filter size={20} />
        </button>
      </div>

      {/* Search & Add */}
      <div className="bg-white p-2 flex items-center gap-2 shadow-sm shrink-0">
        <div className="flex-1 bg-gray-100 rounded-full flex items-center px-3 py-1.5">
          <Search size={16} className="text-gray-400" />
          <input type="text" placeholder="搜索采购单号/物品名称/SKU" className="bg-transparent border-none outline-none ml-2 text-sm w-full" />
        </div>
        <button className="bg-[#2b85e4] text-white px-3 py-1.5 rounded-full text-sm flex items-center gap-1 shrink-0 active:bg-[#2374c7]">
          <Plus size={16} /> 添加
        </button>
      </div>

      {/* Horizontal Filter Scroll */}
      <div className="bg-white border-b border-gray-100 shrink-0">
        <div className="flex overflow-x-auto hide-scrollbar px-2 py-2 gap-2">
          {filters.map(f => (
            <button 
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`whitespace-nowrap px-3 py-1 rounded-full text-[12px] transition-colors ${activeFilter === f ? 'bg-[#2b85e4] text-white' : 'bg-gray-100 text-gray-600'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* List Summary */}
      <div className="px-3 py-2 text-xs text-[#ff9900] bg-orange-50/50 shrink-0 flex justify-between items-center border-b border-orange-100">
        <span>物品数量: 5</span>
        <span>汇总金额: 610 元</span>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-2 pt-2 pb-6">
        {mockPurchases.map(order => <PurchaseOrderCard key={order.id} order={order} />)}
      </div>
    </div>
  );
};

const HomeView = ({ onNavigate }: { onNavigate: (view: string) => void }) => (
  <div className="flex flex-col h-full w-full relative">
    {/* Header */}
    <div className="bg-[#009bf5] text-white flex items-center justify-between px-3 py-3 shrink-0">
      <button className="p-1 -ml-1 active:opacity-70">
        <ChevronLeft size={24} />
      </button>
      <h1 className="text-[17px] font-medium">默认仓库</h1>
      <div className="w-8"></div>
    </div>

    {/* Content */}
    <div className="flex-1 overflow-y-auto pb-32 pt-2">
      <Section title="出库管理">
        <ActionCard color="bg-[#2b85e4]" icon={Minus} label="新增出库" desc="扫码或手动" onClick={() => onNavigate('add-outbound')} />
        <ActionCard color="bg-[#2b85e4]" icon={ClipboardList} label="出库单管理" desc="查询与跟踪" onClick={() => onNavigate('outbound-list')} />
      </Section>

      <Section title="入库管理">
        <ActionCard color="bg-[#19be6b]" icon={Plus} label="新增入库" desc="快速添加库存" onClick={() => onNavigate('add-inbound')} />
        <ActionCard color="bg-[#19be6b]" icon={ClipboardList} label="入库单管理" desc="入库明细记录" onClick={() => onNavigate('inbound-list')} />
      </Section>

      <Section title="采购管理">
        <ActionCard color="bg-[#ff9900]" icon={ShoppingBag} label="我的采购" desc="申请与审核" onClick={() => onNavigate('purchase-list')} />
        <ActionCard color="bg-[#8b5cf6]" icon={User} label="供应商管理" desc="名录与联系人" />
      </Section>
    </div>

    {/* Floating AI Actions */}
    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[85%] bg-gray-900/95 backdrop-blur-md rounded-full p-1.5 flex items-center shadow-2xl shadow-indigo-500/20 z-20 border border-gray-700/50">
      <button onClick={() => onNavigate('photo-recognition')} className="flex-1 flex items-center justify-center gap-2 text-white py-2.5 rounded-full active:bg-white/10 transition-colors">
        <Camera size={18} className="text-[#a78bfa]" />
        <span className="text-[14px] font-medium">拍照识别</span>
      </button>
      <div className="w-[1px] h-5 bg-gray-700 mx-1"></div>
      <button onClick={() => onNavigate('voice-input')} className="flex-1 flex items-center justify-center gap-2 text-white py-2.5 rounded-full active:bg-white/10 transition-colors">
        <Mic size={18} className="text-[#f472b6]" />
        <span className="text-[14px] font-medium">语音录入</span>
      </button>
    </div>
  </div>
);

const StatsView = () => {
  // Mock data aggregations based on existing data
  const totalInventory = 75; // 15 + 10 + 50
  const totalInbound = 16;   // 6 + 10
  const totalOutbound = 8;   // 4 + 3 + 1
  const totalPurchaseExpense = 100;

  const inventoryRanking = [
    { name: '一次性杯', quantity: 50, max: 50, color: 'bg-[#2b85e4]' },
    { name: '番茄', quantity: 15, max: 50, color: 'bg-[#19be6b]' },
    { name: '锅铲', quantity: 10, max: 50, color: 'bg-[#ff9900]' },
  ];

  return (
    <div className="flex flex-col h-full w-full bg-[#f5f5f5]">
      {/* Header */}
      <div className="bg-[#009bf5] text-white flex items-center justify-center px-3 py-3 shrink-0 relative">
        <h1 className="text-[17px] font-medium">数据统计</h1>
        <button className="absolute right-3 text-[13px] flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full active:bg-white/30">
          本月 <ChevronDown size={14} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-20 px-3 pt-3">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-white p-3 rounded-lg shadow-sm flex flex-col gap-2">
            <div className="flex items-center gap-2 text-gray-500 text-[12px]">
              <div className="p-1.5 bg-blue-50 text-[#2b85e4] rounded-md"><Package size={16} /></div>
              库存总量
            </div>
            <div className="text-[20px] font-bold text-gray-800">{totalInventory} <span className="text-[12px] font-normal text-gray-500">件</span></div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm flex flex-col gap-2">
            <div className="flex items-center gap-2 text-gray-500 text-[12px]">
              <div className="p-1.5 bg-purple-50 text-purple-500 rounded-md"><PieChart size={16} /></div>
              采购支出
            </div>
            <div className="text-[20px] font-bold text-gray-800">¥{totalPurchaseExpense}</div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm flex flex-col gap-2">
            <div className="flex items-center gap-2 text-gray-500 text-[12px]">
              <div className="p-1.5 bg-green-50 text-[#19be6b] rounded-md"><TrendingUp size={16} /></div>
              本月入库
            </div>
            <div className="text-[20px] font-bold text-gray-800">{totalInbound} <span className="text-[12px] font-normal text-gray-500">件</span></div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm flex flex-col gap-2">
            <div className="flex items-center gap-2 text-gray-500 text-[12px]">
              <div className="p-1.5 bg-orange-50 text-[#ff9900] rounded-md"><TrendingDown size={16} /></div>
              本月出库
            </div>
            <div className="text-[20px] font-bold text-gray-800">{totalOutbound} <span className="text-[12px] font-normal text-gray-500">件</span></div>
          </div>
        </div>

        {/* Inventory Ranking */}
        <div className="bg-white rounded-lg shadow-sm p-3 mb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[15px] font-medium text-gray-800 flex items-center gap-1">
              <BarChart3 size={16} className="text-[#009bf5]" /> 物品库存排行
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {inventoryRanking.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <div className="flex justify-between text-[12px]">
                  <span className="text-gray-700">{item.name}</span>
                  <span className="text-gray-500">{item.quantity} 件</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div className={`h-full ${item.color} rounded-full`} style={{ width: `${(item.quantity / item.max) * 100}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity Summary */}
        <div className="bg-white rounded-lg shadow-sm p-3">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-[15px] font-medium text-gray-800 flex items-center gap-1">
              <Calendar size={16} className="text-[#009bf5]" /> 近期业务概况
            </h2>
          </div>
          <div className="flex flex-col gap-0">
            <div className="flex justify-between items-center py-2 border-b border-gray-50">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ff9900]"></div>
                <span className="text-[13px] text-gray-700">待审核采购单</span>
              </div>
              <span className="text-[13px] font-medium text-[#ff9900]">2 单</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-50">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#19be6b]"></div>
                <span className="text-[13px] text-gray-700">已完成入库单</span>
              </div>
              <span className="text-[13px] font-medium text-[#19be6b]">2 单</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#2b85e4]"></div>
                <span className="text-[13px] text-gray-700">今日发货出库</span>
              </div>
              <span className="text-[13px] font-medium text-[#2b85e4]">2 单</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const ProfileView = () => {
  return (
    <div className="flex flex-col h-full w-full bg-[#f5f5f5]">
      {/* Header */}
      <div className="bg-[#009bf5] text-white flex items-center justify-center px-3 py-3 shrink-0">
        <h1 className="text-[17px] font-medium">我的</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pt-6 pb-24">
        {/* User Info Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center mb-8">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-sm">
            <User size={40} className="text-[#009bf5]" />
          </div>
          <h2 className="text-[20px] font-bold text-gray-800 mb-1">lsg2</h2>
          <span className="text-[13px] text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-1">当前登录账号</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <button className="w-full bg-white border border-gray-200 text-gray-700 py-3.5 rounded-xl text-[15px] font-medium active:bg-gray-50 flex items-center justify-center gap-2 shadow-sm transition-colors">
            <ArrowLeftRight size={18} className="text-gray-500" />
            切换账号
          </button>
          <button className="w-full bg-white border border-red-100 text-red-500 py-3.5 rounded-xl text-[15px] font-medium active:bg-red-50 flex items-center justify-center gap-2 shadow-sm transition-colors">
            <LogOut size={18} className="text-red-400" />
            退出登录
          </button>
        </div>
      </div>
    </div>
  );
};

const sortItemsByMatch = (itemName: string) => {
  return [...mockItems].sort((a, b) => {
    // 1. Exact name match
    if (a.name === itemName) return -1;
    if (b.name === itemName) return 1;
    // 2. Exact alias match
    if (a.aliases?.includes(itemName)) return -1;
    if (b.aliases?.includes(itemName)) return 1;
    // 3. Partial match
    const aPartial = a.name.includes(itemName) || a.aliases?.some(al => al.includes(itemName)) || itemName.includes(a.name);
    const bPartial = b.name.includes(itemName) || b.aliases?.some(al => al.includes(itemName)) || itemName.includes(b.name);
    if (aPartial && !bPartial) return -1;
    if (!aPartial && bPartial) return 1;
    return 0;
  });
};

const PhotoRecognitionView = ({ onBack, onNavigate }: { onBack: () => void, onNavigate: (view: string, params?: any) => void }) => {
  const [scanning, setScanning] = useState(false);
  const [hasPhoto, setHasPhoto] = useState(false);
  const [results, setResults] = useState<{name: string, quantity: number}[]>([]);
  const [overrides, setOverrides] = useState<Record<number, string>>({});

  const handleTakePhoto = () => {
    setHasPhoto(true);
    setScanning(true);
    setOverrides({});
    // Simulate AI scanning delay
    setTimeout(() => {
      setScanning(false);
      setResults([
        { name: '纸杯', quantity: 50 }, // Synonym matching mockItems
        { name: '西红柿', quantity: 15 },    // Synonym matching mockItems
        { name: '洁柔抽纸', quantity: 2 }    // DOES NOT match mockItems
      ]);
    }, 2000);
  };

  const getLinkedItems = (forInbound = false) => {
    return results.map((item, idx) => {
      const overrideId = overrides[idx];
      let matchedItem;
      if (overrideId === 'unlinked') {
        matchedItem = undefined;
      } else if (overrideId) {
        matchedItem = mockItems.find(mi => mi.id === overrideId);
      } else {
        matchedItem = mockItems.find(mi => mi.name === item.name || mi.aliases?.includes(item.name));
      }
      
      if (matchedItem) {
        return { ...matchedItem, quantity: item.quantity };
      }
      return forInbound ? { name: item.name, quantity: item.quantity } : null;
    }).filter(Boolean);
  };

  return (
    <div className="flex flex-col h-full w-full bg-[#f8f9fc]">
      {/* Header */}
      <div className="bg-[#009bf5] text-white flex items-center px-3 py-3 shrink-0">
        <button onClick={onBack} className="p-1 -ml-1 active:opacity-70">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-[17px] font-medium flex-1 pr-6 text-center">拍照识别</h1>
      </div>

      <div className="flex-1 overflow-hidden flex flex-col">
        {!hasPhoto ? (
          // Camera Placeholder
          <div className="flex-1 flex flex-col items-center justify-center p-6 pb-20">
            <div className="w-full aspect-[3/4] bg-gray-900 rounded-3xl relative overflow-hidden flex flex-col items-center justify-center shadow-lg border border-gray-800">
               <Camera size={48} className="text-gray-500 mb-4" />
               <p className="text-gray-400 text-[13px]">将物品或单据放入框内</p>
               <div className="absolute inset-x-8 inset-y-16 border-2 border-white/20 rounded-xl">
                 {/* Corner markers */}
                 <div className="absolute -top-1 -left-1 w-6 h-6 border-t-4 border-l-4 border-white"></div>
                 <div className="absolute -top-1 -right-1 w-6 h-6 border-t-4 border-r-4 border-white"></div>
                 <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-4 border-l-4 border-white"></div>
                 <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-4 border-r-4 border-white"></div>
               </div>
            </div>
            <button
              onClick={handleTakePhoto}
              className="mt-10 w-20 h-20 bg-[#e0e0e0] rounded-full flex items-center justify-center border-[6px] border-white shadow-xl active:scale-95 transition-transform"
            >
              <div className="w-14 h-14 bg-white rounded-full"></div>
            </button>
          </div>
        ) : scanning ? (
          // Scanning State
          <div className="flex-1 flex flex-col items-center justify-center p-6 bg-white">
            <div className="relative w-48 h-48 mb-8">
               <div className="absolute inset-0 border-4 border-indigo-50 rounded-2xl"></div>
               <div className="absolute inset-x-0 h-1 bg-indigo-500 shadow-[0_4px_15px_rgba(99,102,241,0.5)] animate-scan"></div>
               <ImageIcon size={64} className="absolute inset-0 m-auto text-indigo-200" />
            </div>
            <h2 className="text-[18px] font-medium text-gray-800 mb-2">AI 正在疯狂识别中...</h2>
            <p className="text-[13px] text-gray-400">正在分析物品特征与数量</p>
          </div>
        ) : (
          // Results State
          <div className="flex-1 overflow-y-auto p-4">
            <div className="bg-green-50 border border-green-100 rounded-2xl p-4 flex items-center gap-3 mb-5 shrink-0">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                <Scan size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800 text-[16px]">识别成功</h3>
                <p className="text-[13px] text-green-600 mt-0.5">共识别出 {results.length} 种物品</p>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-3 px-1">
                <h4 className="text-[14px] font-medium text-gray-800">识别清单</h4>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-50">
                {results.map((item, idx) => {
                  const overrideId = overrides[idx];
                  let matchedItem;
                  let isAliasMatch = false;
                  let isManualOverride = false;

                  if (overrideId === 'unlinked') {
                    matchedItem = undefined;
                  } else if (overrideId) {
                    matchedItem = mockItems.find(mi => mi.id === overrideId);
                    isAliasMatch = true; 
                    isManualOverride = true;
                  } else {
                    matchedItem = mockItems.find(mi => mi.name === item.name || mi.aliases?.includes(item.name));
                    isAliasMatch = !!matchedItem && matchedItem.name !== item.name;
                  }

                  const isMatched = !!matchedItem;
                  return (
                    <div key={idx} className={`p-4 flex flex-col gap-3 ${!isMatched ? 'bg-orange-50/50' : ''}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${isMatched ? 'bg-indigo-50 text-indigo-500' : 'bg-orange-100 text-orange-500'}`}>
                            {isMatched ? <Package size={22} /> : <AlertCircle size={22} />}
                          </div>
                          <div>
                            <div className="font-medium text-gray-800 text-[15px] flex items-center gap-1.5 flex-wrap">
                              <span>{isAliasMatch ? matchedItem.name : item.name}</span>
                              {isAliasMatch && <span className="text-gray-400 text-[13px] font-normal tracking-wide"> (识别为: {item.name})</span>}
                              {!isMatched && <span className="px-1.5 py-0.5 bg-orange-100 text-orange-600 text-[10px] rounded border border-orange-200">未入库</span>}
                            </div>
                            <div className="text-[12px] mt-1 text-gray-400">
                              {isMatched ? 
                                <span>编号: #{matchedItem.id} | {isManualOverride ? <span className="text-purple-500 font-medium">已手动修正</span> : isAliasMatch ? <span className="text-[#009bf5] font-medium">已自动关联</span> : matchedItem.category}</span> 
                                : '未在物品库中找到该物品'}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0 bg-gray-50 rounded-lg p-1 border border-gray-100" onClick={(e) => e.stopPropagation()}>
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
                        </div>
                      </div>
                      {!isMatched ? (
                         <div className="pt-1 mt-1">
                           <div className="text-[11px] text-gray-400 mb-2">选择关联物品或按新物品入库 (右滑查看大单):</div>
                           <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                             <button
                               onClick={() => setOverrides({...overrides, [idx]: 'unlinked'})}
                               className={`shrink-0 px-3 py-1.5 rounded-full text-[12px] border ${overrideId === 'unlinked' || (!overrideId && !matchedItem && !isAliasMatch) ? 'bg-orange-50 text-orange-600 border-orange-200' : 'bg-gray-50 text-gray-500 border-gray-200'}`}
                             >
                               按新物品入库
                             </button>
                             {sortItemsByMatch(item.name).map(mi => (
                               <button
                                 key={mi.id}
                                 onClick={() => setOverrides({...overrides, [idx]: mi.id})}
                                 className={`shrink-0 px-3 py-1.5 rounded-full text-[12px] border ${matchedItem?.id === mi.id ? 'bg-[#e6f4fe] text-[#009bf5] border-[#b3dfff]' : 'bg-white text-gray-600 border-gray-200'}`}
                               >
                                 {mi.name}
                               </button>
                             ))}
                           </div>
                        </div>
                      ) : (
                        <div className="pt-1 mt-1 border-t border-gray-100 pt-2">
                           <div className="text-[11px] text-gray-400 mb-2">手动匹配 (右滑查看大单):</div>
                           <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                             <button
                               onClick={() => setOverrides({...overrides, [idx]: 'unlinked'})}
                               className={`shrink-0 px-3 py-1.5 rounded-full text-[12px] border ${overrideId === 'unlinked' || (!overrideId && !matchedItem && !isAliasMatch) ? 'bg-orange-50 text-orange-600 border-orange-200' : 'bg-white text-gray-500 border-gray-200'}`}
                             >
                               取消匹配 (加入新物品)
                             </button>
                             {sortItemsByMatch(item.name).map(mi => (
                               <button
                                 key={mi.id}
                                 onClick={() => setOverrides({...overrides, [idx]: mi.id})}
                                 className={`shrink-0 px-3 py-1.5 rounded-full text-[12px] border ${matchedItem?.id === mi.id ? 'bg-[#e6f4fe] text-[#009bf5] border-[#b3dfff]' : 'bg-white text-gray-600 border-gray-200'}`}
                               >
                                 {mi.name}
                               </button>
                             ))}
                           </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex gap-3 pb-safe pt-2 shrink-0">
              <button
                onClick={() => onNavigate('add-inbound', getLinkedItems(true))}
                className="flex-1 py-3.5 rounded-xl bg-gradient-to-br from-[#19be6b] to-[#15a35c] text-white font-medium shadow-md shadow-green-500/20 active:opacity-90 flex items-center justify-center gap-1.5 transition-opacity"
              >
                <Plus size={18} /> 去入库
              </button>
              <button
                onClick={() => onNavigate('add-outbound', getLinkedItems(false))}
                className="flex-1 py-3.5 rounded-xl bg-gradient-to-br from-[#2b85e4] to-[#2573c7] text-white font-medium shadow-md shadow-blue-500/20 active:opacity-90 flex items-center justify-center gap-1.5 transition-opacity"
              >
                <Minus size={18} /> 去出库
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const AddItemView = ({ onBack, initialItemName = '' }: { onBack: () => void, initialItemName?: string }) => {
  const [itemName, setItemName] = useState(initialItemName);

  return (
    <div className="flex flex-col h-full w-full bg-[#f5f5f5]">
      {/* Header */}
      <div className="bg-[#009bf5] text-white flex items-center px-3 py-3 shrink-0">
        <button onClick={onBack} className="p-1 -ml-1 active:opacity-70">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-[17px] font-medium flex-1 pr-6 text-center">新增物品</h1>
      </div>

      <div className="flex-1 overflow-y-auto pb-24">
        {/* 基本信息 */}
        <div className="bg-white px-4 py-1 mt-2">
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="text-[14px] text-gray-700 w-20"><span className="text-red-500 mr-1">*</span>物品名称</div>
            <input 
              type="text" 
              placeholder="请输入名称" 
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="flex-1 text-right text-[14px] outline-none text-gray-800" 
            />
          </div>
          <div className="flex items-center justify-between py-3 border-b border-gray-100 active:bg-gray-50">
            <div className="text-[14px] text-gray-700 w-20"><span className="text-red-500 mr-1">*</span>分类</div>
            <div className="flex-1 flex items-center justify-end text-gray-400">
              <span className="text-[14px]">请选择</span>
              <ChevronRight size={16} className="ml-1" />
            </div>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-gray-100 active:bg-gray-50">
             <div className="text-[14px] text-gray-700 w-20"><span className="text-red-500 mr-1">*</span>系列</div>
            <div className="flex-1 flex items-center justify-end text-gray-400">
              <span className="text-[14px]">请选择</span>
              <ChevronRight size={16} className="ml-1" />
            </div>
          </div>
          <div className="flex flex-col py-3 border-b border-gray-100">
             <div className="text-[14px] text-gray-700 mb-3">图片</div>
             <div className="flex gap-3">
               <div className="w-20 h-20 border border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-400 bg-gray-50 active:bg-gray-100">
                 <Plus size={24} />
               </div>
             </div>
             <div className="text-[12px] text-[#2b85e4] mt-2 active:opacity-70 flex inline-flex w-max">手动输入图片地址</div>
          </div>
          <div className="flex flex-col py-3 border-b border-gray-100">
             <div className="text-[14px] text-gray-700 mb-2">包装清单</div>
             <textarea className="w-full bg-gray-50/50 border border-gray-100 rounded-lg p-2.5 text-[14px] outline-none resize-none h-16 text-gray-800" placeholder="暂无"></textarea>
          </div>
          <div className="flex flex-col py-3">
             <div className="text-[14px] text-gray-700 mb-2">备注</div>
             <textarea className="w-full bg-gray-50/50 border border-gray-100 rounded-lg p-2.5 text-[14px] outline-none resize-none h-16 text-gray-800" placeholder="暂无"></textarea>
          </div>
        </div>

        {/* SKU 信息 */}
        <div className="mt-3">
          <div className="px-4 py-2 flex items-center justify-between">
            <span className="text-[13px] text-gray-500 font-medium">SKU 信息</span>
            <span className="text-[12px] text-[#2b85e4] active:opacity-70">货品编码规则</span>
          </div>
          
          <div className="bg-white mx-3 rounded-xl p-3 border border-gray-100 shadow-sm relative overflow-hidden mb-4">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#19be6b]"></div>
            <div className="pl-2">
              <div className="flex gap-3 mb-4">
                <div className="w-[60px] h-[60px] bg-gray-50 border border-gray-100 rounded-lg flex flex-col items-center justify-center shrink-0 text-gray-300">
                  <ImageIcon size={20} />
                  <span className="text-[8px] mt-1 scale-90">暂无图片</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                     <span className="text-[13px] text-gray-600"><span className="text-red-500 mr-0.5">*</span>规格名称</span>
                     <input type="text" placeholder="请输入规格" className="w-24 text-right text-[13px] outline-none text-gray-800" />
                  </div>
                  <div className="flex items-center justify-between pt-2">
                     <span className="text-[13px] text-gray-600">状态</span>
                     <div className="flex items-center gap-1 text-[13px] text-gray-800 border border-gray-200 px-2.5 py-1 rounded-md active:bg-gray-50">
                       上架 <ChevronDown size={14} className="text-gray-400"/>
                     </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-2 space-y-2 mb-3">
                <div className="flex items-center justify-between bg-white px-2 py-2 rounded-md border border-gray-100 shadow-sm">
                  <span className="text-[12px] text-gray-500 w-[64px] shrink-0"><span className="text-red-500 mr-0.5">*</span>物品货号</span>
                  <input type="text" placeholder="点击生成或输入" className="flex-1 text-[13px] mx-2 outline-none text-gray-800" />
                  <RefreshCw size={14} className="text-gray-400 active:text-[#2b85e4] active:rotate-180 transition-all" />
                </div>
                <div className="flex items-center justify-between bg-white px-2 py-2 rounded-md border border-gray-100 shadow-sm">
                  <span className="text-[12px] text-gray-500 w-[64px] shrink-0"><span className="text-red-500 mr-0.5">*</span>SKU编码</span>
                  <input type="text" placeholder="点击生成或输入" className="flex-1 text-[13px] mx-2 outline-none text-gray-800" />
                  <RefreshCw size={14} className="text-gray-400 active:text-[#2b85e4] active:rotate-180 transition-all" />
                </div>
                <div className="flex items-center justify-between bg-white px-2 py-2 rounded-md border border-gray-100 shadow-sm">
                  <span className="text-[12px] text-gray-500 w-[64px] shrink-0">&nbsp;&nbsp;物品条码</span>
                  <input type="text" placeholder="输入或扫码" className="flex-1 text-[13px] mx-2 outline-none text-gray-800" />
                  <Scan size={14} className="text-[#2b85e4] active:opacity-70" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="flex flex-col border-b border-gray-100 pb-2">
                   <span className="text-[12px] text-gray-500 mb-1">销售单价(¥) <Edit size={10} className="inline ml-1 text-blue-400"/></span>
                   <input type="number" placeholder="0.00" className="text-[14px] outline-none text-gray-800" />
                 </div>
                 <div className="flex flex-col border-b border-gray-100 pb-2">
                   <span className="text-[12px] text-gray-500 mb-1"><span className="text-red-500 mr-0.5">*</span>库存单位</span>
                   <div className="flex items-center justify-between text-[14px] text-gray-400 active:bg-gray-50">
                     请选择单位 <ChevronDown size={14}/>
                   </div>
                 </div>
              </div>

              <div className="mt-4 pt-3 border-t border-dashed border-gray-200">
                <button className="w-full py-2 bg-blue-50/50 flex items-center justify-center gap-1.5 text-[13px] text-[#2b85e4] rounded-lg border border-blue-100/50 active:bg-blue-50">
                  <Plus size={14} /> 添加副单位
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="bg-white px-4 py-2.5 flex gap-3 border-t border-gray-200 absolute bottom-0 w-full max-w-md pb-safe">
        <button onClick={onBack} className="flex-1 py-3 rounded-xl bg-gray-100 text-gray-700 font-medium active:bg-gray-200 text-[15px]">取消</button>
        <button onClick={() => { alert(`保存物品: ${itemName} 成功!`); onBack(); }} className="flex-[2] py-3 rounded-xl bg-[#2b85e4] text-white font-medium active:bg-[#2374c7] shadow-md shadow-blue-500/20 text-[15px]">保存物品</button>
      </div>
    </div>
  );
};

const VoiceInputView = ({ onBack, onNavigate }: { onBack: () => void, onNavigate: (view: string, params?: any) => void }) => {
  const [status, setStatus] = useState<'idle' | 'recording' | 'processing' | 'results'>('idle');
  const [results, setResults] = useState<{name: string, quantity: number}[]>([]);
  const [transcript, setTranscript] = useState("");
  const [overrides, setOverrides] = useState<Record<number, string>>({});

  const handleStartRecording = () => {
    setStatus('recording');
    setOverrides({});
    // Simulate recording time
    setTimeout(() => {
      setStatus('processing');
      setTranscript("帮我出库15个西红柿，50个纸杯，还有2包不存在的纸巾。");
      // Simulate AI processing delay
      setTimeout(() => {
        setStatus('results');
        setResults([
          { name: '纸杯', quantity: 50 }, // Synonym matching mockItems
          { name: '西红柿', quantity: 15 },    // Synonym matching mockItems
          { name: '不存在的纸巾', quantity: 2 }    // DOES NOT match mockItems
        ]);
      }, 1500);
    }, 3000);
  };

  const getLinkedItems = (forInbound = false) => {
    return results.map((item, idx) => {
      const overrideId = overrides[idx];
      let matchedItem;
      if (overrideId === 'unlinked') {
        matchedItem = undefined;
      } else if (overrideId) {
        matchedItem = mockItems.find(mi => mi.id === overrideId);
      } else {
        matchedItem = mockItems.find(mi => mi.name === item.name || mi.aliases?.includes(item.name));
      }
      
      if (matchedItem) {
        return { ...matchedItem, quantity: item.quantity };
      }
      return forInbound ? { name: item.name, quantity: item.quantity } : null;
    }).filter(Boolean);
  };

  return (
    <div className="flex flex-col h-full w-full bg-[#f8f9fc]">
      {/* Header */}
      <div className="bg-[#009bf5] text-white flex items-center px-3 py-3 shrink-0">
        <button onClick={onBack} className="p-1 -ml-1 active:opacity-70">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-[17px] font-medium flex-1 pr-6 text-center">语音录入</h1>
      </div>

      <div className="flex-1 overflow-hidden flex flex-col">
        {status === 'idle' || status === 'recording' || status === 'processing' ? (
          <div className="flex-1 flex flex-col items-center justify-between p-6 pb-20 mt-10">
            <div className="flex flex-col items-center min-h-[120px]">
              {status === 'idle' && (
                <div className="text-center">
                  <h2 className="text-[20px] font-medium text-gray-800 mb-2">我是您的AI仓储助手</h2>
                  <p className="text-[14px] text-gray-400">您可以这样对我说："入库10箱苹果和5个西瓜"</p>
                </div>
              )}
              {status === 'recording' && (
                <div className="text-center animate-pulse">
                  <h2 className="text-[20px] font-medium text-pink-500 mb-2">正在倾听中...</h2>
                  <p className="text-[14px] text-gray-400">请说出想要操作的物品名和数量</p>
                </div>
              )}
              {status === 'processing' && (
                <div className="text-center">
                  <div className="flex items-end justify-center h-8 gap-1 mb-4">
                    <div className="w-1.5 bg-pink-400 rounded-full animate-wave-1"></div>
                    <div className="w-1.5 bg-pink-400 rounded-full animate-wave-2"></div>
                    <div className="w-1.5 bg-pink-400 rounded-full animate-wave-3"></div>
                    <div className="w-1.5 bg-pink-400 rounded-full animate-wave-4"></div>
                    <div className="w-1.5 bg-pink-400 rounded-full animate-wave-5"></div>
                  </div>
                  <h2 className="text-[18px] font-medium text-gray-800 mb-2">AI 正在解析语义...</h2>
                  <p className="text-[14px] text-pink-500 font-medium px-6">"{transcript}"</p>
                </div>
              )}
            </div>

            <div className="relative flex items-center justify-center w-32 h-32 mb-10">
               {status === 'recording' && (
                 <div className="absolute inset-0 bg-pink-100 rounded-full animate-pulse-ring"></div>
               )}
               <button
                 onClick={status === 'idle' ? handleStartRecording : undefined}
                 className={`relative z-10 w-20 h-20 rounded-full flex items-center justify-center shadow-xl active:scale-95 transition-all duration-300
                    ${status === 'idle' ? 'bg-gradient-to-br from-pink-400 to-pink-500 text-white' : 
                      status === 'recording' ? 'bg-pink-500 text-white scale-110 shadow-pink-500/40' : 
                      'bg-gray-200 text-gray-400'}`}
               >
                 <Mic size={32} />
               </button>
            </div>
          </div>
        ) : (
          // Results State
          <div className="flex-1 overflow-y-auto p-4">
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 mb-5 shrink-0">
              <h3 className="font-semibold text-indigo-800 text-[14px] mb-1">您刚才说：</h3>
              <p className="text-[14px] text-indigo-600 leading-relaxed font-medium">"{transcript}"</p>
            </div>
            
            <div className="bg-green-50 border border-green-100 rounded-2xl p-4 flex items-center gap-3 mb-5 shrink-0">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                <Scan size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800 text-[16px]">识别成功</h3>
                <p className="text-[13px] text-green-600 mt-0.5">共识别出 {results.length} 种物品</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto mb-4">
              <div className="flex items-center justify-between mb-3 px-1">
                <h4 className="text-[14px] font-medium text-gray-800">识别清单</h4>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-50">
                {results.map((item, idx) => {
                  const overrideId = overrides[idx];
                  let matchedItem;
                  let isAliasMatch = false;
                  let isManualOverride = false;

                  if (overrideId === 'unlinked') {
                    matchedItem = undefined;
                  } else if (overrideId) {
                    matchedItem = mockItems.find(mi => mi.id === overrideId);
                    isAliasMatch = true; 
                    isManualOverride = true;
                  } else {
                    matchedItem = mockItems.find(mi => mi.name === item.name || mi.aliases?.includes(item.name));
                    isAliasMatch = !!matchedItem && matchedItem.name !== item.name;
                  }

                  const isMatched = !!matchedItem;
                  return (
                    <div key={idx} className={`p-4 flex flex-col gap-3 ${!isMatched ? 'bg-orange-50/50' : ''}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${isMatched ? 'bg-indigo-50 text-indigo-500' : 'bg-orange-100 text-orange-500'}`}>
                            {isMatched ? <Package size={22} /> : <AlertCircle size={22} />}
                          </div>
                          <div>
                            <div className="font-medium text-gray-800 text-[15px] flex items-center gap-1.5 flex-wrap">
                              <span>{isAliasMatch ? matchedItem.name : item.name}</span>
                              {isAliasMatch && <span className="text-gray-400 text-[13px] font-normal tracking-wide"> (识别为: {item.name})</span>}
                              {!isMatched && <span className="px-1.5 py-0.5 bg-orange-100 text-orange-600 text-[10px] rounded border border-orange-200">未入库</span>}
                            </div>
                            <div className="text-[12px] mt-1 text-gray-400">
                              {isMatched ? 
                                <span>编号: #{matchedItem.id} | {isManualOverride ? <span className="text-purple-500 font-medium">已手动修正</span> : isAliasMatch ? <span className="text-[#009bf5] font-medium">已自动关联</span> : matchedItem.category}</span> 
                                : '未在物品库中找到该物品'}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0 bg-gray-50 rounded-lg p-1 border border-gray-100" onClick={(e) => e.stopPropagation()}>
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
                        </div>
                      </div>
                      {!isMatched ? (
                         <div className="pt-1 mt-1">
                           <div className="text-[11px] text-gray-400 mb-2">选择关联物品或按新物品入库 (右滑查看大单):</div>
                           <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                             <button
                               onClick={() => setOverrides({...overrides, [idx]: 'unlinked'})}
                               className={`shrink-0 px-3 py-1.5 rounded-full text-[12px] border ${overrideId === 'unlinked' || (!overrideId && !matchedItem && !isAliasMatch) ? 'bg-orange-50 text-orange-600 border-orange-200' : 'bg-gray-50 text-gray-500 border-gray-200'}`}
                             >
                               按新物品入库
                             </button>
                             {sortItemsByMatch(item.name).map(mi => (
                               <button
                                 key={mi.id}
                                 onClick={() => setOverrides({...overrides, [idx]: mi.id})}
                                 className={`shrink-0 px-3 py-1.5 rounded-full text-[12px] border ${matchedItem?.id === mi.id ? 'bg-[#e6f4fe] text-[#009bf5] border-[#b3dfff]' : 'bg-white text-gray-600 border-gray-200'}`}
                               >
                                 {mi.name}
                               </button>
                             ))}
                           </div>
                        </div>
                      ) : (
                        <div className="pt-1 mt-1 border-t border-gray-100 pt-2">
                           <div className="text-[11px] text-gray-400 mb-2">手动匹配 (右滑查看大单):</div>
                           <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                             <button
                               onClick={() => setOverrides({...overrides, [idx]: 'unlinked'})}
                               className={`shrink-0 px-3 py-1.5 rounded-full text-[12px] border ${overrideId === 'unlinked' || (!overrideId && !matchedItem && !isAliasMatch) ? 'bg-orange-50 text-orange-600 border-orange-200' : 'bg-white text-gray-500 border-gray-200'}`}
                             >
                               取消匹配 (加入新物品)
                             </button>
                             {sortItemsByMatch(item.name).map(mi => (
                               <button
                                 key={mi.id}
                                 onClick={() => setOverrides({...overrides, [idx]: mi.id})}
                                 className={`shrink-0 px-3 py-1.5 rounded-full text-[12px] border ${matchedItem?.id === mi.id ? 'bg-[#e6f4fe] text-[#009bf5] border-[#b3dfff]' : 'bg-white text-gray-600 border-gray-200'}`}
                               >
                                 {mi.name}
                               </button>
                             ))}
                           </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex gap-3 pb-safe pt-2">
              <button
                onClick={() => onNavigate('add-inbound', getLinkedItems(true))}
                className="flex-1 py-3.5 rounded-xl bg-gradient-to-br from-[#19be6b] to-[#15a35c] text-white font-medium shadow-md shadow-green-500/20 active:opacity-90 flex items-center justify-center gap-1.5 transition-opacity"
              >
                <Plus size={18} /> 去入库
              </button>
              <button
                onClick={() => onNavigate('add-outbound', getLinkedItems(false))}
                className="flex-1 py-3.5 rounded-xl bg-gradient-to-br from-[#2b85e4] to-[#2573c7] text-white font-medium shadow-md shadow-blue-500/20 active:opacity-90 flex items-center justify-center gap-1.5 transition-opacity"
              >
                <Minus size={18} /> 去出库
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [viewParams, setViewParams] = useState<any>(null);

  const handleNavigate = (view: string, params?: any) => {
    setViewParams(params || null);
    setCurrentView(view);
  };

  return (
    <div className="flex flex-col h-[100dvh] bg-[#f5f5f5] font-sans max-w-md mx-auto relative overflow-hidden">
      {currentView === 'home' && <HomeView onNavigate={handleNavigate} />}
      {currentView === 'items' && <ItemsView onNavigate={handleNavigate} />}
      {currentView === 'stats' && <StatsView />}
      {currentView === 'profile' && <ProfileView />}
      {currentView === 'add-outbound' && <AddOutboundView onBack={() => handleNavigate('home')} initialItems={viewParams} />}
      {currentView === 'outbound-list' && <OutboundListView onBack={() => handleNavigate('home')} onNavigate={handleNavigate} />}
      {currentView === 'add-inbound' && <AddInboundView onBack={() => handleNavigate('home')} initialItems={viewParams} />}
      {currentView === 'inbound-list' && <InboundListView onBack={() => handleNavigate('home')} />}
      {currentView === 'purchase-list' && <PurchaseListView onBack={() => handleNavigate('home')} />}
      {currentView === 'photo-recognition' && <PhotoRecognitionView onBack={() => handleNavigate('home')} onNavigate={handleNavigate} />}
      {currentView === 'voice-input' && <VoiceInputView onBack={() => handleNavigate('home')} onNavigate={handleNavigate} />}
      {currentView === 'add-item' && <AddItemView onBack={() => handleNavigate(viewParams?.returnTo || 'items')} initialItemName={viewParams?.name} />}

      {/* Bottom Navigation (Only show on main tabs) */}
      {(currentView === 'home' || currentView === 'items' || currentView === 'stats' || currentView === 'profile') && (
        <div className="bg-[#fafafa] border-t border-gray-200 flex justify-around items-center py-1.5 shrink-0 absolute bottom-0 w-full max-w-md pb-safe z-10">
          <button onClick={() => handleNavigate('home')} className={`flex flex-col items-center gap-0.5 w-1/4 py-1 ${currentView === 'home' ? 'text-[#009bf5]' : 'text-[#999999] active:opacity-70'}`}>
            <Home size={22} strokeWidth={2} />
            <span className="text-[10px]">首页</span>
          </button>
          <button onClick={() => handleNavigate('items')} className={`flex flex-col items-center gap-0.5 w-1/4 py-1 ${currentView === 'items' ? 'text-[#009bf5]' : 'text-[#999999] active:opacity-70'}`}>
            <ShoppingBag size={22} strokeWidth={2} />
            <span className="text-[10px]">物品</span>
          </button>
          <button onClick={() => handleNavigate('stats')} className={`flex flex-col items-center gap-0.5 w-1/4 py-1 ${currentView === 'stats' ? 'text-[#009bf5]' : 'text-[#999999] active:opacity-70'}`}>
            <PieChart size={22} strokeWidth={2} />
            <span className="text-[10px]">统计</span>
          </button>
          <button onClick={() => handleNavigate('profile')} className={`flex flex-col items-center gap-0.5 w-1/4 py-1 ${currentView === 'profile' ? 'text-[#009bf5]' : 'text-[#999999] active:opacity-70'}`}>
            <User size={22} strokeWidth={2} />
            <span className="text-[10px]">我的</span>
          </button>
        </div>
      )}
    </div>
  );
}
