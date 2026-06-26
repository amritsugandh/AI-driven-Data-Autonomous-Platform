import { memo, useCallback, useState } from 'react';
import { icons } from '@/constants/assets';
import { navItems } from '@/constants/content';
import { Icon } from '@/components/common/Icon';

export const Navbar = memo(function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleOpen = useCallback(() => setOpen((value) => !value), []);
  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a href="#" className="brand" aria-label="FlowPilot AI home">
          <Icon src={icons.cube} className="brand-icon" />
          <span>FlowPilot AI</span>
        </a>

        <button
          className="nav-toggle"
          type="button"
          onClick={toggleOpen}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
        >
          <Icon src={open ? icons.xMark : icons.search} className="size-5" />
        </button>

        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
          <a className="nav-cta" href="#pricing" onClick={closeMenu}>
            See plans
          </a>
        </div>
      </nav>
    </header>
  );
});
