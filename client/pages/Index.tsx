import { useState } from "react";

const inspectionData = [
  {
    id: 1,
    date: "07/04/2024",
    name: "Foundation Inspection",
    discipline: "Civil",
    title: "PRO-COMP-QLD-ITP-0001",
    author: "Jude Bell",
    rev: "A",
    status: "In Progress"
  },
  {
    id: 2,
    date: "07/04/2024",
    name: "Structural Assembly",
    discipline: "Civil",
    title: "PRO-COMP-QLD-ITP-0002",
    author: "Aiden Fox",
    rev: "B",
    status: "Approved"
  },
  {
    id: 3,
    date: "07/04/2024",
    name: "Mounting System Installation",
    discipline: "Civil",
    title: "PRO-COMP-QLD-ITP-0003",
    author: "Levi Gray",
    rev: "A",
    status: "Approved"
  },
  {
    id: 4,
    date: "07/04/2024",
    name: "PV Module Installation",
    discipline: "Civil",
    title: "PRO-COMP-QLD-ITP-0004",
    author: "Aiden Fox",
    rev: "B",
    status: "Rejected"
  },
  {
    id: 5,
    date: "07/04/2024",
    name: "Cable Tray Installation",
    discipline: "Electrical",
    title: "PRO-COMP-QLD-ITP-0005",
    author: "Eliza Hart",
    rev: "A",
    status: "Rejected"
  },
  {
    id: 6,
    date: "07/04/2024",
    name: "Wiring and Cabling",
    discipline: "Electrical",
    title: "PRO-COMP-QLD-ITP-0006",
    author: "Levi Gray",
    rev: "C",
    status: "Approved"
  },
  {
    id: 7,
    date: "07/04/2024",
    name: "Grounding System",
    discipline: "Electrical",
    title: "PRO-COMP-QLD-ITP-0007",
    author: "Eliza Hart",
    rev: "A",
    status: "In Progress"
  },
  {
    id: 8,
    date: "07/04/2024",
    name: "Grounding System",
    discipline: "Electrical",
    title: "PRO-COMP-QLD-ITP-0008",
    author: "Aiden Fox",
    rev: "A",
    status: "Approved"
  },
  {
    id: 9,
    date: "07/04/2024",
    name: "Transformer Installation",
    discipline: "Electrical",
    title: "PRO-COMP-QLD-ITP-0009",
    author: "Aiden Fox",
    rev: "A",
    status: "Rejected"
  },
  {
    id: 10,
    date: "07/04/2024",
    name: "Substation Construction",
    discipline: "Electrical",
    title: "PRO-COMP-QLD-ITP-0010",
    author: "Eliza Hart",
    rev: "A",
    status: "Approved"
  },
  {
    id: 11,
    date: "07/04/2024",
    name: "HVAC Installation",
    discipline: "Mechanical",
    title: "PRO-COMP-QLD-ITP-0011",
    author: "Aiden Fox",
    rev: "A",
    status: "In Progress"
  },
  {
    id: 12,
    date: "07/04/2024",
    name: "Battery Storage Installation",
    discipline: "Mechanical",
    title: "PRO-COMP-QLD-ITP-0012",
    author: "Jude Bell",
    rev: "D",
    status: "Approved"
  },
  {
    id: 13,
    date: "07/04/2024",
    name: "Monitoring System Installation",
    discipline: "Electrical",
    title: "PRO-COMP-QLD-ITP-0013",
    author: "Aiden Fox",
    rev: "A",
    status: "In Progress"
  },
  {
    id: 14,
    date: "07/04/2024",
    name: "Lightning Protection",
    discipline: "Electrical",
    title: "PRO-COMP-QLD-ITP-0014",
    author: "Jude Bell",
    rev: "B",
    status: "Rejected"
  },
  {
    id: 15,
    date: "07/04/2024",
    name: "Foundation Inspection",
    discipline: "Mechanical",
    title: "PRO-COMP-QLD-ITP-0015",
    author: "Eliza Hart",
    rev: "A",
    status: "Approved"
  },
  {
    id: 16,
    date: "07/04/2024",
    name: "Security System Installation",
    discipline: "Electrical",
    title: "PRO-COMP-QLD-ITP-0016",
    author: "Levi Gray",
    rev: "B",
    status: "In Progress"
  },
  {
    id: 17,
    date: "07/04/2024",
    name: "Site Grading and Preparation",
    discipline: "Civil",
    title: "PRO-COMP-QLD-ITP-0017",
    author: "Aiden Fox",
    rev: "A",
    status: "Approved"
  }
];

// Icons as SVG components
const ArrowUpIcon = () => (
  <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.3551 6.212L4.83672 2.58L4.86164 24L6.7783 24L6.75339 2.593L10.2226 6.213L11.5776 4.8L7.82193 0.881002C7.55495 0.602373 7.238 0.381347 6.88915 0.230552C6.54031 0.0797573 6.16642 0.00214148 5.78883 0.00214145C5.41123 0.00214141 5.03734 0.0797571 4.6885 0.230552C4.33966 0.381347 4.0227 0.602372 3.75572 0.881002L1.21689e-05 4.8L1.3551 6.212Z" fill="#4B9D65"/>
  </svg>
);

const ArrowDownIcon = () => (
  <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.2225 17.7902L6.74092 21.4222L6.716 0.00219609L4.79933 0.00219643L4.82425 21.4092L1.35509 17.7892L3.35703e-06 19.2022L3.75571 23.1212C4.02269 23.3998 4.33965 23.6208 4.68849 23.7716C5.03733 23.9224 5.41123 24.0001 5.78882 24.0001C6.16641 24.0001 6.5403 23.9224 6.88915 23.7716C7.23799 23.6208 7.55495 23.3998 7.82192 23.1212L11.5776 19.2022L10.2225 17.7902Z" fill="#CA271B"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 23.529L18.4858 17.0148C20.1779 14.9453 21.0099 12.3045 20.8096 9.63878C20.6093 6.97303 19.3921 4.48625 17.4097 2.69279C15.4273 0.899341 12.8314 -0.0635602 10.159 0.00325877C7.48658 0.0700778 4.94207 1.1615 3.05179 3.05179C1.1615 4.94207 0.0700778 7.48658 0.00325877 10.159C-0.0635602 12.8314 0.899341 15.4273 2.69279 17.4097C4.48625 19.3921 6.97303 20.6093 9.63878 20.8096C12.3045 21.0099 14.9453 20.1779 17.0148 18.4858L23.529 25L25 23.529ZM10.4361 18.7583C8.79011 18.7583 7.18109 18.2702 5.8125 17.3558C4.44392 16.4413 3.37724 15.1416 2.74735 13.6209C2.11746 12.1002 1.95265 10.4269 2.27377 8.8125C2.59488 7.19815 3.3875 5.71527 4.55138 4.55138C5.71527 3.3875 7.19815 2.59488 8.8125 2.27377C10.4269 1.95265 12.1002 2.11746 13.6209 2.74735C15.1416 3.37724 16.4413 4.44392 17.3558 5.8125C18.2702 7.18109 18.7583 8.79011 18.7583 10.4361C18.7558 12.6425 17.8782 14.7579 16.3181 16.3181C14.7579 17.8782 12.6425 18.7558 10.4361 18.7583Z" fill="#F0F0F0"/>
  </svg>
);

const SortIcon = () => (
  <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.5 9.25L0.00480864 0.812499L12.9952 0.812498L6.5 9.25Z" fill="#858585"/>
  </svg>
);

const SettingsIcon = () => (
  <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.9593 12.6125C21.9591 12.0326 21.9063 11.4539 21.8017 10.8835L25 9.03893L21.8469 3.57353L18.6475 5.42231C17.7642 4.66653 16.7491 4.08006 15.6531 3.6923V0H9.34688V3.6923C8.25092 4.08006 7.23582 4.66653 6.35248 5.42231L3.15312 3.57353L0 9.03893L3.19831 10.8835C2.98822 12.0266 2.98822 13.1984 3.19831 14.3414L0 16.186L3.15312 21.6514L6.35248 19.8037C7.23591 20.5591 8.251 21.1452 9.34688 21.5326V25.2249H15.6531V21.5326C16.7491 21.1449 17.7642 20.5584 18.6475 19.8026L21.8469 21.6514L25 16.186L21.8017 14.3414C21.9063 13.771 21.9591 13.1924 21.9593 12.6125ZM15.6531 12.6125C15.6531 13.2361 15.4682 13.8457 15.1217 14.3642C14.7753 14.8828 14.2828 15.2869 13.7066 15.5256C13.1305 15.7642 12.4965 15.8267 11.8849 15.705C11.2732 15.5833 10.7114 15.283 10.2704 14.842C9.82944 14.4011 9.52913 13.8392 9.40747 13.2276C9.28581 12.616 9.34825 11.982 9.5869 11.4058C9.82555 10.8297 10.2297 10.3372 10.7482 9.99074C11.2667 9.64427 11.8764 9.45934 12.5 9.45934C13.3363 9.45934 14.1383 9.79155 14.7296 10.3829C15.3209 10.9742 15.6531 11.7762 15.6531 12.6125Z" fill="#7A9690"/>
  </svg>
);

export default function Index() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-white font-['Roboto']">
      {/* Header Bar with Logo */}
      <div className="w-full h-[60px] bg-gradient-to-r from-waltura-primary to-waltura-green-accent flex items-center px-8">
        <div className="text-white text-xl font-bold tracking-wide">
          WALTURA
        </div>
        <div className="ml-auto flex items-center gap-4">
          <div className="text-white text-sm">David Kavanagh</div>
          <div className="w-8 h-8 bg-white/20 rounded-full"></div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="w-full h-12 bg-waltura-tertiary flex items-center px-4 md:px-8 overflow-x-auto">
        <div className="bg-waltura-secondary h-12 px-4 md:px-8 flex items-center rounded-none whitespace-nowrap">
          <span className="text-waltura-primary font-bold text-[17px] tracking-[-0.425px]">Dashboard</span>
        </div>
        <div className="px-4 md:px-8 h-12 flex items-center whitespace-nowrap">
          <span className="text-waltura-primary font-bold text-[17px] tracking-[-0.425px]">Quality Control</span>
        </div>
        <div className="px-4 md:px-8 h-12 flex items-center whitespace-nowrap">
          <span className="text-waltura-primary font-bold text-[17px] tracking-[-0.425px]">Document Control</span>
        </div>
        <div className="px-4 md:px-8 h-12 flex items-center whitespace-nowrap">
          <span className="text-waltura-primary font-bold text-[17px] tracking-[-0.425px]">Analytics</span>
        </div>
      </div>

      {/* Sub Navigation */}
      <div className="w-full h-12 bg-waltura-secondary flex items-center px-4 md:px-8 overflow-x-auto">
        <div className="text-waltura-primary font-bold text-[20px] tracking-[-0.5px] mr-4 md:mr-8 whitespace-nowrap">
          Quality Control
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <div className="text-waltura-gray-dark font-bold text-[15px] tracking-[-0.375px] border-b-2 border-waltura-primary pb-1 whitespace-nowrap">
            Documents and Procedures
          </div>
          <div className="text-waltura-gray-medium font-bold text-[15px] tracking-[-0.375px] whitespace-nowrap">
            Test and Inspections
          </div>
          <div className="text-waltura-gray-medium font-bold text-[15px] tracking-[-0.375px] whitespace-nowrap">
            Compliance
          </div>
        </div>
      </div>

      {/* Sub Sub Navigation */}
      <div className="w-full h-[37px] bg-white flex items-center px-4 md:px-8 border-b-2 border-waltura-secondary overflow-x-auto">
        <div className="flex items-center gap-4 md:gap-6">
          <div className="text-waltura-gray-dark font-bold text-[15px] tracking-[-0.375px] whitespace-nowrap">
            Inspection Test Plans (ITP)
          </div>
          <div className="text-waltura-gray-medium font-bold text-[15px] tracking-[-0.375px] whitespace-nowrap">
            Inspection Test Checklists (ITC)
          </div>
          <div className="text-waltura-gray-medium font-bold text-[15px] tracking-[-0.375px] whitespace-nowrap">
            Work Packs
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
          {/* Total Card */}
          <div className="border border-waltura-tertiary rounded-[3px] p-6 h-[110px] flex flex-col justify-between">
            <div className="text-waltura-gray-dark font-bold text-[20px] tracking-[-0.5px] leading-[36px]">
              Total
            </div>
            <div className="text-waltura-gray-dark font-medium text-[45px] tracking-[-1.125px] leading-[36px]">
              142
            </div>
          </div>

          {/* Approved Card */}
          <div className="border border-waltura-tertiary rounded-[3px] p-6 h-[110px] flex flex-col justify-between relative">
            <div className="text-waltura-gray-dark font-bold text-[20px] tracking-[-0.5px] leading-[36px]">
              Approved
            </div>
            <div className="flex items-center justify-between">
              <div className="text-waltura-gray-dark font-medium text-[45px] tracking-[-1.125px] leading-[36px]">
                21
              </div>
              <div className="absolute bottom-6 right-6">
                <ArrowUpIcon />
              </div>
            </div>
          </div>

          {/* In Progress Card */}
          <div className="border border-waltura-tertiary rounded-[3px] p-6 h-[110px] flex flex-col justify-between relative">
            <div className="text-waltura-gray-dark font-bold text-[20px] tracking-[-0.5px] leading-[36px]">
              In Progress
            </div>
            <div className="flex items-center justify-between">
              <div className="text-waltura-gray-dark font-medium text-[45px] tracking-[-1.125px] leading-[36px]">
                102
              </div>
              <div className="absolute bottom-6 right-6">
                <ArrowDownIcon />
              </div>
            </div>
          </div>

          {/* Others Card */}
          <div className="border border-waltura-tertiary rounded-[3px] p-6 h-[110px] flex flex-col justify-between relative">
            <div className="text-waltura-gray-dark font-bold text-[20px] tracking-[-0.5px] leading-[36px]">
              Others
            </div>
            <div className="flex items-center justify-between">
              <div className="text-waltura-gray-dark font-medium text-[45px] tracking-[-1.125px] leading-[36px]">
                18
              </div>
              <div className="absolute bottom-6 right-6">
                <ArrowDownIcon />
              </div>
            </div>
          </div>

          {/* Overall Progress Card */}
          <div className="border border-waltura-tertiary rounded-[3px] p-6 h-[110px] flex flex-col justify-between relative">
            <div className="text-waltura-gray-dark font-bold text-[20px] tracking-[-0.5px] leading-[36px]">
              Overall Progress
            </div>
            <div className="flex items-center justify-between">
              <div className="text-waltura-gray-dark font-medium text-[45px] tracking-[-1.125px] leading-[36px]">
                15%
              </div>
              <div className="absolute bottom-6 right-6">
                <ArrowUpIcon />
              </div>
            </div>
          </div>
        </div>

        {/* Search and Action Bar */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 max-w-[628px] h-10 bg-waltura-secondary rounded-[3px] relative">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-full px-4 bg-transparent text-waltura-gray-medium font-bold text-[15px] tracking-[-0.375px] placeholder-waltura-gray-medium border-none outline-none"
            />
            <div className="absolute right-0 top-0 w-16 h-10 bg-waltura-primary rounded-[3px] flex items-center justify-center">
              <SearchIcon />
            </div>
          </div>
          <button className="h-10 px-6 bg-waltura-primary rounded-[3px] text-waltura-secondary font-bold text-[15px] tracking-[-0.375px] flex items-center justify-center">
            + New Item
          </button>
          <button className="h-10 px-6 bg-waltura-primary rounded-[3px] text-waltura-secondary font-bold text-[15px] tracking-[-0.375px] flex items-center justify-center">
            Export
          </button>
        </div>

        {/* Data Table */}
        <div className="bg-white">
          {/* Table Header */}
          <div className="flex items-center h-[31px] border-b border-waltura-tertiary">
            <div className="w-20 px-3 bg-waltura-secondary h-full flex items-center justify-between">
              <span className="text-waltura-gray-medium font-bold text-[14px] tracking-[-0.35px]">Item</span>
              <SortIcon />
            </div>
            <div className="w-32 px-3 bg-waltura-secondary h-full flex items-center justify-between">
              <span className="text-waltura-gray-medium font-bold text-[14px] tracking-[-0.35px]">Date Issued</span>
              <SortIcon />
            </div>
            <div className="flex-1 px-3 bg-waltura-secondary h-full flex items-center justify-between">
              <span className="text-waltura-gray-medium font-bold text-[14px] tracking-[-0.35px]">Name</span>
              <SortIcon />
            </div>
            <div className="w-32 px-3 bg-waltura-secondary h-full flex items-center justify-between">
              <span className="text-waltura-gray-medium font-bold text-[14px] tracking-[-0.35px]">Discipline</span>
              <SortIcon />
            </div>
            <div className="w-48 px-3 bg-waltura-secondary h-full flex items-center justify-between">
              <span className="text-waltura-gray-medium font-bold text-[14px] tracking-[-0.35px]">Title</span>
              <SortIcon />
            </div>
            <div className="w-32 px-3 bg-waltura-secondary h-full flex items-center justify-between">
              <span className="text-waltura-gray-medium font-bold text-[14px] tracking-[-0.35px]">Author</span>
              <SortIcon />
            </div>
            <div className="w-20 px-3 bg-waltura-secondary h-full flex items-center justify-between">
              <span className="text-waltura-gray-medium font-bold text-[14px] tracking-[-0.35px]">Rev.</span>
              <SortIcon />
            </div>
            <div className="w-32 px-3 bg-waltura-secondary h-full flex items-center justify-between">
              <span className="text-waltura-gray-medium font-bold text-[14px] tracking-[-0.35px]">Status</span>
              <SortIcon />
            </div>
            <div className="w-12 px-3 bg-waltura-secondary h-full flex items-center justify-center">
              <SettingsIcon />
            </div>
          </div>

          {/* Table Rows */}
          {inspectionData.map((item) => (
            <div key={item.id} className="flex items-center h-[35px] border-b border-waltura-tertiary hover:bg-gray-50">
              <div className="w-20 px-3 h-full flex items-center">
                <span className="text-waltura-gray-dark font-medium text-[14px] tracking-[-0.35px]">{item.id}</span>
              </div>
              <div className="w-32 px-3 h-full flex items-center">
                <span className="text-waltura-gray-dark font-medium text-[14px] tracking-[-0.35px]">{item.date}</span>
              </div>
              <div className="flex-1 px-3 h-full flex items-center">
                <span className="text-waltura-gray-dark font-medium text-[14px] tracking-[-0.35px]">{item.name}</span>
              </div>
              <div className="w-32 px-3 h-full flex items-center">
                <span className="text-waltura-gray-dark font-medium text-[14px] tracking-[-0.35px]">{item.discipline}</span>
              </div>
              <div className="w-48 px-3 h-full flex items-center">
                <span className="text-waltura-gray-dark font-medium text-[14px] tracking-[-0.35px]">{item.title}</span>
              </div>
              <div className="w-32 px-3 h-full flex items-center">
                <span className="text-waltura-gray-dark font-medium text-[14px] tracking-[-0.35px]">{item.author}</span>
              </div>
              <div className="w-20 px-3 h-full flex items-center">
                <span className="text-waltura-gray-dark font-medium text-[14px] tracking-[-0.35px]">{item.rev}</span>
              </div>
              <div className="w-32 px-3 h-full flex items-center">
                <span className="text-waltura-gray-dark font-medium text-[14px] tracking-[-0.35px]">{item.status}</span>
              </div>
              <div className="w-12 px-3 h-full flex items-center justify-center">
                <div className="w-1 h-4 bg-waltura-gray-medium opacity-50 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
