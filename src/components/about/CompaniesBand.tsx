const companies = [
  { name: 'Convergys',  logo: '/about/companies/convergys.svg'  },
  { name: 'NetCracker', logo: '/about/companies/netcracker.svg' },
  { name: 'Symantec',   logo: '/about/companies/symantec.svg'   },
  { name: 'Broadcom',   logo: '/about/companies/broadcom.svg'   },
  { name: 'Amdocs',     logo: '/about/companies/amdocs.svg'     },
  { name: 'SAP',        logo: '/about/companies/sap.svg'        },
]

export function CompaniesBand() {
  return (
    <div className="bg-brand-surface dark:bg-brand-surface-dark border-y border-brand-slate/10 dark:border-brand-slate-dark/10 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-xs font-sans font-semibold tracking-widest uppercase text-brand-slate/40 dark:text-brand-slate-dark/40 mb-8">
          Career across
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center bg-white rounded-xl border border-brand-slate/10 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              style={{ width: '250px', height: '110px', padding: '20px 24px' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                style={{ height: '64px', width: 'auto', maxWidth: '202px', objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
