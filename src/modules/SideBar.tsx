import React, { useState } from 'react';
import '@css/sidebar.css';

// Типы для навигационных элементов
export interface NavItem {
    id: string;
    label: string;
    icon: string;
    path?: string;
    badge?: number;
    children?: NavItem[];
}

export interface SidebarProps {
    isCollapsed?: boolean;
    onToggle?: (isCollapsed: boolean) => void;
    onNavigate?: (path: string) => void;
    activePath?: string;
    navItems?: NavItem[];
    serverInfo?: {
        status: 'online' | 'offline' | 'maintenance';
        ip: string;
        name: string;
    };
}

const Sidebar: React.FC<SidebarProps> = ({
                                             isCollapsed = false,
                                             onToggle,
                                             onNavigate,
                                             activePath = '/dashboard',
                                             navItems = defaultNavItems,
                                             serverInfo = defaultServerInfo
                                         }) => {
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

    const toggleExpand = (id: string) => {
        const newExpanded = new Set(expandedItems);
        if (newExpanded.has(id)) {
            newExpanded.delete(id);
        } else {
            newExpanded.add(id);
        }
        setExpandedItems(newExpanded);
    };

    const handleItemClick = (item: NavItem) => {
        if (item.children) {
            toggleExpand(item.id);
        } else if (item.path && onNavigate) {
            onNavigate(item.path);
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'online':
                return '#27ae60';
            case 'offline':
                return '#e74c3c';
            case 'maintenance':
                return '#f39c12';
            default:
                return '#95a5a6';
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'online':
                return 'Online';
            case 'offline':
                return 'Offline';
            case 'maintenance':
                return 'Maintenance';
            default:
                return 'Unknown';
        }
    };

    return (
        <div className={`sidebar ${isCollapsed ? 'sidebar--collapsed' : ''}`}>
            {/* Заголовок */}
            <div className="sidebar__header">
                <div className="sidebar__logo">
                    <h2>{isCollapsed ? 'SC' : 'ServerControl'}</h2>
                </div>
                <button
                    className="sidebar__toggle"
                    onClick={() => onToggle?.(!isCollapsed)}
                    aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                >
                    {isCollapsed ? '→' : '←'}
                </button>
            </div>

            {/* Информация о сервере */}
            {!isCollapsed && (
                <div className="sidebar__server-info">
                    <div className="server-info__status">
            <span
                className="status-indicator"
                style={{ backgroundColor: getStatusColor(serverInfo.status) }}
            />
                        <span className="status-text">
              {getStatusText(serverInfo.status)}
            </span>
                    </div>
                    <div className="server-info__ip">{serverInfo.ip}</div>
                    <div className="server-info__name">{serverInfo.name}</div>
                </div>
            )}

            {/* Навигационное меню */}
            <nav className="sidebar__nav">
                <ul className="nav__list">
                    {navItems.map((item) => (
                        <li key={item.id} className="nav__item">
                            <div
                                className={`nav__link ${
                                    activePath === item.path ? 'nav__link--active' : ''
                                } ${expandedItems.has(item.id) ? 'nav__link--expanded' : ''}`}
                                onClick={() => handleItemClick(item)}
                            >
                                <span className="nav__icon">{item.icon}</span>
                                {!isCollapsed && (
                                    <>
                                        <span className="nav__label">{item.label}</span>
                                        {item.badge && item.badge > 0 && (
                                            <span className="nav__badge">{item.badge}</span>
                                        )}
                                        {item.children && (
                                            <span className="nav__arrow">
                        {expandedItems.has(item.id) ? '▼' : '▶'}
                      </span>
                                        )}
                                    </>
                                )}
                            </div>

                            {/* Подменю */}
                            {item.children && expandedItems.has(item.id) && !isCollapsed && (
                                <ul className="nav__submenu">
                                    {item.children.map((child) => (
                                        <li key={child.id} className="nav__subitem">
                                            <div
                                                className={`nav__sublink ${
                                                    activePath === child.path ? 'nav__sublink--active' : ''
                                                }`}
                                                onClick={() => child.path && onNavigate?.(child.path)}
                                            >
                                                <span className="nav__subicon">{child.icon}</span>
                                                <span className="nav__sublabel">{child.label}</span>
                                                {child.badge && child.badge > 0 && (
                                                    <span className="nav__badge">{child.badge}</span>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Футер */}
            {!isCollapsed && (
                <div className="sidebar__footer">
                    <div className="sidebar__user">
                        <span className="user__avatar">👤</span>
                        <span className="user__name">Администратор</span>
                    </div>
                </div>
            )}
        </div>
    );
};

// Дефолтные данные
const defaultNavItems: NavItem[] = [
    {
        id: 'dashboard',
        label: 'Дашборд',
        icon: '📊',
        path: '/dashboard'
    },
    {
        id: 'monitoring',
        label: 'Мониторинг',
        icon: '⚡',
        path: '/monitoring'
    },
    {
        id: 'management',
        label: 'Управление',
        icon: '🔧',
        children: [
            {
                id: 'power',
                label: 'Питание',
                icon: '⚡',
                path: '/management/power'
            },
            {
                id: 'services',
                label: 'Сервисы',
                icon: '🔄',
                path: '/management/services'
            }
        ]
    },
    {
        id: 'network',
        label: 'Сеть',
        icon: '🌐',
        path: '/network'
    },
    {
        id: 'storage',
        label: 'Хранилище',
        icon: '💾',
        path: '/storage'
    },
    {
        id: 'security',
        label: 'Безопасность',
        icon: '🛡️',
        badge: 3,
        path: '/security'
    },
    {
        id: 'logs',
        label: 'Логи',
        icon: '📋',
        path: '/logs'
    },
    {
        id: 'settings',
        label: 'Настройки',
        icon: '⚙️',
        path: '/settings'
    }
];

const defaultServerInfo = {
    status: 'online' as const,
    ip: '192.168.1.100',
    name: 'Production Server'
};

export default Sidebar;