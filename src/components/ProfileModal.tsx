import { PERSONAL_INFO } from '../data';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScrollToContact: () => void;
}

export default function ProfileModal({
  isOpen,
  onClose,
  onScrollToContact,
}: ProfileModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#122131] border border-[#464554]/40 rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#c0c1ff]/10 rounded-full blur-3xl pointer-events-none"></div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#c7c4d7] hover:text-white p-1 rounded-lg bg-[#1c2b3c] hover:bg-[#273647] cursor-pointer transition-colors"
          aria-label="Close profile"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#8083ff] to-[#1c2b3c] flex items-center justify-center text-[#d4e4fa] font-headline-lg text-headline-lg font-bold border border-white/10 shadow-lg">
            AS
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-headline-md text-headline-md text-[#d4e4fa] font-semibold">
                {PERSONAL_INFO.name}
              </h3>
              <span className="w-2 h-2 rounded-full bg-[#7bd0ff] animate-pulse"></span>
            </div>
            <p className="text-sm text-[#7bd0ff]">{PERSONAL_INFO.degree}</p>
            <p className="text-xs text-[#c7c4d7] mt-0.5">
              {PERSONAL_INFO.institution} • {PERSONAL_INFO.semester}
            </p>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="bg-[#051424] p-3.5 rounded-xl border border-[#464554]/25 flex items-center justify-between">
            <span className="font-label-caps text-xs text-[#c7c4d7]">
              VERIFICATION STATUS
            </span>
            <span className="font-code-md text-xs text-[#7bd0ff] flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">
                verified
              </span>
              STUDENT IDENTITY CONFIRMED
            </span>
          </div>

          <div className="bg-[#051424] p-3.5 rounded-xl border border-[#464554]/25 flex items-center justify-between">
            <span className="font-label-caps text-xs text-[#c7c4d7]">
              PRIMARY STACK
            </span>
            <span className="font-code-md text-xs text-[#c0c1ff]">
              Python • SQL • Web Development • AI/ML
            </span>
          </div>

          <div className="bg-[#051424] p-3.5 rounded-xl border border-[#464554]/25 flex items-center justify-between">
            <span className="font-label-caps text-xs text-[#c7c4d7]">
              CORRESPONDENCE
            </span>
            <span className="font-code-md text-xs text-[#d4e4fa]">
              {PERSONAL_INFO.email}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={() => {
              onClose();
              onScrollToContact();
            }}
            className="flex-1 py-2.5 rounded-lg bg-[#c0c1ff] text-[#1000a9] font-medium text-sm hover:bg-[#8083ff] transition-all text-center cursor-pointer"
          >
            Initiate Contact
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-[#1c2b3c] hover:bg-[#273647] text-[#d4e4fa] font-medium text-sm cursor-pointer border border-[#464554]/30"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
