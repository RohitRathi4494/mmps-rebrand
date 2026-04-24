import React, { useState } from 'react';
import { Search, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const PAGE_SIZE = 10;

export default function DataTable({ columns, data, searchKeys = [], actions, emptyMessage = 'No items found.' }) {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState({ key: null, dir: 'asc' });
  const [page, setPage] = useState(1);

  const filtered = data.filter(row =>
    !query || searchKeys.some(k => String(row[k] ?? '').toLowerCase().includes(query.toLowerCase()))
  );

  const sorted = sort.key ? [...filtered].sort((a, b) => {
    const av = String(a[sort.key] ?? '').toLowerCase();
    const bv = String(b[sort.key] ?? '').toLowerCase();
    return sort.dir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
  }) : filtered;

  const total = Math.ceil(sorted.length / PAGE_SIZE);
  const paged = sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const toggleSort = (key) => setSort(s => s.key === key ? { key, dir: s.dir === 'asc' ? 'desc' : 'asc' } : { key, dir: 'asc' });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {searchKeys.length > 0 && (
        <div className="search-bar" style={{ maxWidth: 320 }}>
          <Search size={15} className="search-icon" />
          <input className="form-control" placeholder="Search..." value={query} onChange={e => { setQuery(e.target.value); setPage(1); }} />
        </div>
      )}

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              {columns.map(col => (
                <th key={col.key} onClick={() => col.sortable && toggleSort(col.key)}
                  style={{ cursor: col.sortable ? 'pointer' : 'default', userSelect: 'none', whiteSpace: 'nowrap' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    {col.label}
                    {col.sortable && sort.key === col.key && (sort.dir === 'asc' ? <ChevronUp size={13} /> : <ChevronDown size={13} />)}
                  </span>
                </th>
              ))}
              {actions && <th style={{ textAlign: 'right' }}>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {paged.length === 0 ? (
              <tr><td colSpan={columns.length + (actions ? 1 : 0)} style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '40px 20px' }}>{emptyMessage}</td></tr>
            ) : paged.map((row, i) => (
              <tr key={row.id ?? i}>
                {columns.map(col => (
                  <td key={col.key}>{col.render ? col.render(row) : String(row[col.key] ?? '')}</td>
                ))}
                {actions && <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>{actions(row)}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {total > 1 && (
        <div className="pagination">
          <button onClick={() => setPage(p => p - 1)} disabled={page === 1}><ChevronLeft size={14} /></button>
          {[...Array(total)].map((_, i) => (
            <button key={i} className={page === i + 1 ? 'active' : ''} onClick={() => setPage(i + 1)}>{i + 1}</button>
          ))}
          <button onClick={() => setPage(p => p + 1)} disabled={page === total}><ChevronRight size={14} /></button>
        </div>
      )}

      <div style={{ fontSize: '.8rem', color: 'var(--text-muted)', textAlign: 'center' }}>
        Showing {paged.length} of {sorted.length} results
      </div>
    </div>
  );
}
