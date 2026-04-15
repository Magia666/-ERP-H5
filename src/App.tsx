import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, FileEdit, ClipboardList, ArrowLeftRight, LayoutGrid, Home, ShoppingBag, PieChart, User, Search, Filter, Plus, Eye, Edit, FileText, Image as ImageIcon, Scan, Trash2, Minus, BarChart3, TrendingUp, TrendingDown, Package, Calendar, ChevronDown, Camera, Mic, LogOut } from 'lucide-react';

const MenuIcon = ({ color, text, icon: Icon, label, onClick }: { color: string, text?: string, icon?: React.ElementType, label: string, onClick?: () => void }) => (
  <div onClick={onClick} className="flex flex-col items-center justify-start w-1/4 mt-3 mb-2 cursor-pointer active:opacity-70">
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white text-[18px] font-medium ${color}`}>
      {text ? text : (Icon && <Icon size={22} strokeWidth={2} />)}
    </div>
    <span className="text-[11px] text-[#333333] mt-2 text-center leading-tight">{label}</span>
  </div>
);

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="bg-white rounded-xl mx-3 mt-3 px-1 py-2 shadow-sm">
    <div className="text-[11px] text-[#999999] mb-1 ml-2">{title}</div>
    <div className="flex flex-wrap">
      {children}
    </div>
  </div>
);

const mockItems = [
  { id: '20433', name: '锅铲', category: '耗材/厨具/--', creator: 'lsg2', date: '2026-03-19 16:33:28' },
  { id: '20432', name: '鸡蛋', category: '荤菜/食材/--', creator: 'lsg2', date: '2026-01-22 13:18:27' },
  { id: '20431', name: '番茄', category: '素菜/蔬菜/--', creator: 'lsg2', date: '2026-01-22 13:17:15' },
  { id: '20430', name: '一次性杯', category: '耗材/餐具/--', creator: 'lsg2', date: '2026-01-21 16:54:43' },
  { id: '20429', name: '大虾', category: '荤菜/食材/--', creator: 'lsg2', date: '2026-01-21 10:47:36' },
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

const ItemsView = () => (
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
      <button className="bg-[#2b85e4] text-white px-3 py-1.5 rounded-full text-sm flex items-center gap-1 shrink-0 active:bg-[#2374c7]">
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

const AddOutboundView = ({ onBack }: { onBack: () => void }) => {
  const [showItemSelector, setShowItemSelector] = useState(false);

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
          <span>已添加物品</span>
          <span>共 1 种</span>
        </div>

        <div className="px-2">
          <div className="bg-white p-3 rounded-lg shadow-sm mb-2">
            <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-2">
              <div className="font-medium text-[15px] text-gray-800">
                番茄 <span className="text-[11px] text-gray-400 ml-1 font-normal">#25238</span>
              </div>
              <button className="p-1 active:opacity-50">
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
                  <span>规格: 番茄</span>
                  <span>货号: fq01</span>
                </div>
                <div className="flex justify-between">
                  <span>类目: 素菜</span>
                  <span>SKU: SC0203</span>
                </div>
                <div className="text-gray-400 mt-1">
                  可用库存: <span className="text-gray-800 font-medium">0</span> &nbsp;|&nbsp; 冻结: 0
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
                <button className="w-8 h-full flex items-center justify-center text-gray-500 active:bg-gray-100">
                  <Minus size={14} />
                </button>
                <div className="w-10 h-full flex items-center justify-center border-l border-r border-gray-200 text-[13px] font-medium">
                  0
                </div>
                <button className="w-8 h-full flex items-center justify-center text-gray-500 active:bg-gray-100">
                  <Plus size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="bg-white border-t border-gray-200 flex justify-between items-center px-4 py-2 shrink-0 absolute bottom-0 w-full max-w-md pb-safe z-20 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        <div className="text-[12px] text-gray-600">
          合计数量: <span className="text-[#ff9900] text-[18px] font-medium ml-1">0</span>
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

const AddInboundView = ({ onBack }: { onBack: () => void }) => {
  const [showItemSelector, setShowItemSelector] = useState(false);

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
          <span>已添加物品</span>
          <span>共 1 种</span>
        </div>

        <div className="px-2">
          <div className="bg-white p-3 rounded-lg shadow-sm mb-2">
            <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-2">
              <div className="font-medium text-[15px] text-gray-800">
                锅铲 <span className="text-[11px] text-gray-400 ml-1 font-normal">#25240</span>
              </div>
              <button className="p-1 active:opacity-50">
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
                  <span>规格: 大锅铲</span>
                  <span>货号: HC030000003</span>
                </div>
                <div className="flex justify-between">
                  <span>类目: 耗材</span>
                  <span>SKU: HC030000004</span>
                </div>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 pt-2 border-t border-gray-50">
              <div className="flex items-center justify-between col-span-2">
                <span className="text-[12px] text-gray-600">入库数量</span>
                <div className="flex items-center border border-gray-200 rounded h-7">
                  <button className="w-8 h-full flex items-center justify-center text-gray-500 active:bg-gray-100">
                    <Minus size={14} />
                  </button>
                  <div className="w-10 h-full flex items-center justify-center border-l border-r border-gray-200 text-[13px] font-medium">
                    0
                  </div>
                  <button className="w-8 h-full flex items-center justify-center text-gray-500 active:bg-gray-100">
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
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="bg-white border-t border-gray-200 flex justify-between items-center px-4 py-2 shrink-0 absolute bottom-0 w-full max-w-md pb-safe z-20 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        <div className="text-[12px] text-gray-600 flex flex-col">
          <span>入库总数量: <span className="text-[#ff9900] text-[15px] font-medium ml-1">0</span></span>
          <span>总金额: <span className="text-[#ff9900] text-[15px] font-medium ml-1">0</span></span>
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
      <Section title="出库">
        <MenuIcon color="bg-[#2b85e4]" text="出" label="新增出库" onClick={() => onNavigate('add-outbound')} />
        <MenuIcon color="bg-[#2b85e4]" icon={ClipboardList} label="出库单管理" onClick={() => onNavigate('outbound-list')} />
      </Section>

      <Section title="入库">
        <MenuIcon color="bg-[#19be6b]" text="入" label="新增入库" onClick={() => onNavigate('add-inbound')} />
        <MenuIcon color="bg-[#19be6b]" icon={ClipboardList} label="入库单管理" onClick={() => onNavigate('inbound-list')} />
      </Section>

      <Section title="采购">
        <MenuIcon color="bg-[#ff9900]" text="采" label="我的采购" onClick={() => onNavigate('purchase-list')} />
        <MenuIcon color="bg-[#19be6b]" text="供" label="供应商管理" />
      </Section>
    </div>

    {/* Floating AI Actions */}
    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[85%] bg-gray-900/95 backdrop-blur-md rounded-full p-1.5 flex items-center shadow-2xl shadow-indigo-500/20 z-20 border border-gray-700/50">
      <button className="flex-1 flex items-center justify-center gap-2 text-white py-2.5 rounded-full active:bg-white/10 transition-colors">
        <Camera size={18} className="text-[#a78bfa]" />
        <span className="text-[14px] font-medium">拍照识别</span>
      </button>
      <div className="w-[1px] h-5 bg-gray-700 mx-1"></div>
      <button className="flex-1 flex items-center justify-center gap-2 text-white py-2.5 rounded-full active:bg-white/10 transition-colors">
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

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="flex flex-col h-screen bg-[#f5f5f5] font-sans max-w-md mx-auto relative overflow-hidden">
      {currentView === 'home' && <HomeView onNavigate={setCurrentView} />}
      {currentView === 'items' && <ItemsView />}
      {currentView === 'stats' && <StatsView />}
      {currentView === 'profile' && <ProfileView />}
      {currentView === 'add-outbound' && <AddOutboundView onBack={() => setCurrentView('home')} />}
      {currentView === 'outbound-list' && <OutboundListView onBack={() => setCurrentView('home')} onNavigate={setCurrentView} />}
      {currentView === 'add-inbound' && <AddInboundView onBack={() => setCurrentView('home')} />}
      {currentView === 'inbound-list' && <InboundListView onBack={() => setCurrentView('home')} />}
      {currentView === 'purchase-list' && <PurchaseListView onBack={() => setCurrentView('home')} />}

      {/* Bottom Navigation (Only show on main tabs) */}
      {(currentView === 'home' || currentView === 'items' || currentView === 'stats' || currentView === 'profile') && (
        <div className="bg-[#fafafa] border-t border-gray-200 flex justify-around items-center py-1.5 shrink-0 absolute bottom-0 w-full max-w-md pb-safe z-10">
          <button onClick={() => setCurrentView('home')} className={`flex flex-col items-center gap-0.5 w-1/4 py-1 ${currentView === 'home' ? 'text-[#009bf5]' : 'text-[#999999] active:opacity-70'}`}>
            <Home size={22} strokeWidth={2} />
            <span className="text-[10px]">首页</span>
          </button>
          <button onClick={() => setCurrentView('items')} className={`flex flex-col items-center gap-0.5 w-1/4 py-1 ${currentView === 'items' ? 'text-[#009bf5]' : 'text-[#999999] active:opacity-70'}`}>
            <ShoppingBag size={22} strokeWidth={2} />
            <span className="text-[10px]">物品</span>
          </button>
          <button onClick={() => setCurrentView('stats')} className={`flex flex-col items-center gap-0.5 w-1/4 py-1 ${currentView === 'stats' ? 'text-[#009bf5]' : 'text-[#999999] active:opacity-70'}`}>
            <PieChart size={22} strokeWidth={2} />
            <span className="text-[10px]">统计</span>
          </button>
          <button onClick={() => setCurrentView('profile')} className={`flex flex-col items-center gap-0.5 w-1/4 py-1 ${currentView === 'profile' ? 'text-[#009bf5]' : 'text-[#999999] active:opacity-70'}`}>
            <User size={22} strokeWidth={2} />
            <span className="text-[10px]">我的</span>
          </button>
        </div>
      )}
    </div>
  );
}
