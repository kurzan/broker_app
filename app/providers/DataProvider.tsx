import { Dispatch, SetStateAction, createContext, FC, useMemo, useState } from "react";

interface IContext {
  activeStories: string[] | null,
  setActiveStories: Dispatch<SetStateAction<string[] | null>>,
  marketDataShares: any,
  setMarketDataShares: Dispatch<SetStateAction<any>>
}

export const DataContext = createContext<IContext>({} as IContext);


export const DataProvider: FC<{children: any}> = ({children}) => {

  const [activeStories, setActiveStories] = useState<string[] | null>(null)
  const [marketDataShares, setMarketDataShares] = useState([]);


  const value = useMemo(() => ({
    activeStories, setActiveStories, marketDataShares, setMarketDataShares
  }), [activeStories, marketDataShares])

  return <DataContext.Provider value={value}>
    {children}
  </DataContext.Provider>

}