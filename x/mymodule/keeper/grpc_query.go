package keeper

import (
	"myModule/x/mymodule/types"
)

var _ types.QueryServer = Keeper{}
