import { Address, Bytes } from "@graphprotocol/graph-ts"
import {
  AccountCreated as AccountCreatedEvent,
  PermissionGranted as PermissionGrantedEvent,
  PermissionRevoked as PermissionRevokedEvent,
  AssociatedSystemSet as AssociatedSystemSetEvent,
  OwnerChanged as OwnerChangedEvent,
  OwnerNominated as OwnerNominatedEvent,
  Upgraded as UpgradedEvent,
  FactoryInitialized as FactoryInitializedEvent,
  MarketCreated as MarketCreatedEvent,
  CollateralModified as CollateralModifiedEvent,
  OrderCommitted as OrderCommittedEvent,
  PreviousOrderExpired as PreviousOrderExpiredEvent,
  CollateralDeducted as CollateralDeductedEvent,
  InterestCharged as InterestChargedEvent,
  MarketUpdated as MarketUpdatedEvent,
  OrderSettled as OrderSettledEvent,
  OrderCancelled as OrderCancelledEvent,
  FeatureFlagAllowAllSet as FeatureFlagAllowAllSetEvent,
  FeatureFlagAllowlistAdded as FeatureFlagAllowlistAddedEvent,
  FeatureFlagAllowlistRemoved as FeatureFlagAllowlistRemovedEvent,
  FeatureFlagDeniersReset as FeatureFlagDeniersResetEvent,
  FeatureFlagDenyAllSet as FeatureFlagDenyAllSetEvent,
  AccountFlaggedForLiquidation as AccountFlaggedForLiquidationEvent,
  AccountLiquidationAttempt as AccountLiquidationAttemptEvent,
  PositionLiquidated as PositionLiquidatedEvent,
  FundingParametersSet as FundingParametersSetEvent,
  LiquidationParametersSet as LiquidationParametersSetEvent,
  LockedOiRatioSet as LockedOiRatioSetEvent,
  MarketPriceDataUpdated as MarketPriceDataUpdatedEvent,
  MaxLiquidationParametersSet as MaxLiquidationParametersSetEvent,
  MaxMarketSizeSet as MaxMarketSizeSetEvent,
  MaxMarketValueSet as MaxMarketValueSetEvent,
  OrderFeesSet as OrderFeesSetEvent,
  SettlementStrategyAdded as SettlementStrategyAddedEvent,
  SettlementStrategySet as SettlementStrategySetEvent,
  CollateralConfigurationSet as CollateralConfigurationSetEvent,
  FeeCollectorSet as FeeCollectorSetEvent,
  InterestRateParametersSet as InterestRateParametersSetEvent,
  InterestRateUpdated as InterestRateUpdatedEvent,
  KeeperCostNodeIdUpdated as KeeperCostNodeIdUpdatedEvent,
  KeeperRewardGuardsSet as KeeperRewardGuardsSetEvent,
  PerAccountCapsSet as PerAccountCapsSetEvent,
  ReferrerShareUpdated as ReferrerShareUpdatedEvent,
  SynthDeductionPrioritySet as SynthDeductionPrioritySetEvent
} from "../generated/Contract/Contract"
import {
  AccountCreated,
  PermissionGranted,
  PermissionRevoked,
  AssociatedSystemSet,
  OwnerChanged,
  OwnerNominated,
  Upgraded,
  FactoryInitialized,
  MarketCreated,
  CollateralModified,
  OrderCommitted,
  PreviousOrderExpired,
  CollateralDeducted,
  InterestCharged,
  MarketUpdated,
  OrderSettled,
  OrderCancelled,
  FeatureFlagAllowAllSet,
  FeatureFlagAllowlistAdded,
  FeatureFlagAllowlistRemoved,
  FeatureFlagDeniersReset,
  FeatureFlagDenyAllSet,
  AccountFlaggedForLiquidation,
  AccountLiquidationAttempt,
  PositionLiquidated,
  FundingParametersSet,
  LiquidationParametersSet,
  LockedOiRatioSet,
  MarketPriceDataUpdated,
  MaxLiquidationParametersSet,
  MaxMarketSizeSet,
  MaxMarketValueSet,
  OrderFeesSet,
  SettlementStrategyAdded,
  SettlementStrategySet,
  CollateralConfigurationSet,
  FeeCollectorSet,
  InterestRateParametersSet,
  InterestRateUpdated,
  KeeperCostNodeIdUpdated,
  KeeperRewardGuardsSet,
  PerAccountCapsSet,
  ReferrerShareUpdated,
  SynthDeductionPrioritySet
} from "../generated/schema"


export function handleAccountCreated(event: AccountCreatedEvent): void {
  let entity = new AccountCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.accountId = event.params.accountId
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePermissionGranted(event: PermissionGrantedEvent): void {
  let entity = new PermissionGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.accountId = event.params.accountId
  entity.permission = event.params.permission
  entity.user = event.params.user
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePermissionRevoked(event: PermissionRevokedEvent): void {
  let entity = new PermissionRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.accountId = event.params.accountId
  entity.permission = event.params.permission
  entity.user = event.params.user
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAssociatedSystemSet(
  event: AssociatedSystemSetEvent
): void {
  let entity = new AssociatedSystemSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.kind = event.params.kind
  entity.Contract_id = event.params.id
  entity.proxy = event.params.proxy
  entity.impl = event.params.impl

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnerChanged(event: OwnerChangedEvent): void {
  let entity = new OwnerChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldOwner = event.params.oldOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnerNominated(event: OwnerNominatedEvent): void {
  let entity = new OwnerNominated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpgraded(event: UpgradedEvent): void {
  let entity = new Upgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.self = event.params.self
  entity.implementation = event.params.implementation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFactoryInitialized(event: FactoryInitializedEvent): void {
  let entity = new FactoryInitialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.globalPerpsMarketId = event.params.globalPerpsMarketId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketCreated(event: MarketCreatedEvent): void {
  let entity = new MarketCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.perpsMarketId = event.params.perpsMarketId
  entity.marketName = event.params.marketName
  entity.marketSymbol = event.params.marketSymbol

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCollateralModified(event: CollateralModifiedEvent): void {
  let entity = new CollateralModified(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.accountId = event.params.accountId
  entity.synthMarketId = event.params.synthMarketId
  entity.amountDelta = event.params.amountDelta
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}


export function handleOrderCommitted(event: OrderCommittedEvent): void {
  let entity = new OrderCommitted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.marketId = event.params.marketId
  entity.accountId = event.params.accountId
  entity.orderType = event.params.orderType
  entity.sizeDelta = event.params.sizeDelta
  entity.acceptablePrice = event.params.acceptablePrice
  entity.commitmentTime = event.params.commitmentTime
  entity.expectedPriceTime = event.params.expectedPriceTime
  entity.settlementTime = event.params.settlementTime
  entity.expirationTime = event.params.expirationTime
  entity.trackingCode = event.params.trackingCode
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePreviousOrderExpired(
  event: PreviousOrderExpiredEvent
): void {
  let entity = new PreviousOrderExpired(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.marketId = event.params.marketId
  entity.accountId = event.params.accountId
  entity.sizeDelta = event.params.sizeDelta
  entity.acceptablePrice = event.params.acceptablePrice
  entity.commitmentTime = event.params.commitmentTime
  entity.trackingCode = event.params.trackingCode

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCollateralDeducted(event: CollateralDeductedEvent): void {
  let entity = new CollateralDeducted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.synthMarketId = event.params.synthMarketId
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInterestCharged(event: InterestChargedEvent): void {
  let entity = new InterestCharged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.accountId = event.params.accountId
  entity.interest = event.params.interest

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketUpdated(event: MarketUpdatedEvent): void {
  let entity = new MarketUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.marketId = event.params.marketId
  entity.price = event.params.price
  entity.skew = event.params.skew
  entity.size = event.params.size
  entity.sizeDelta = event.params.sizeDelta
  entity.currentFundingRate = event.params.currentFundingRate
  entity.currentFundingVelocity = event.params.currentFundingVelocity
  entity.interestRate = event.params.interestRate

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderSettled(event: OrderSettledEvent): void {
  let entity = new OrderSettled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.marketId = event.params.marketId
  entity.accountId = event.params.accountId
  entity.fillPrice = event.params.fillPrice
  entity.pnl = event.params.pnl
  entity.accruedFunding = event.params.accruedFunding
  entity.sizeDelta = event.params.sizeDelta
  entity.newSize = event.params.newSize
  entity.totalFees = event.params.totalFees
  entity.referralFees = event.params.referralFees
  entity.collectedFees = event.params.collectedFees
  entity.settlementReward = event.params.settlementReward
  entity.trackingCode = event.params.trackingCode
  entity.settler = event.params.settler

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderCancelled(event: OrderCancelledEvent): void {
  let entity = new OrderCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.marketId = event.params.marketId
  entity.accountId = event.params.accountId
  entity.desiredPrice = event.params.desiredPrice
  entity.fillPrice = event.params.fillPrice
  entity.sizeDelta = event.params.sizeDelta
  entity.settlementReward = event.params.settlementReward
  entity.trackingCode = event.params.trackingCode
  entity.settler = event.params.settler

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeatureFlagAllowAllSet(
  event: FeatureFlagAllowAllSetEvent
): void {
  let entity = new FeatureFlagAllowAllSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.feature = event.params.feature
  entity.allowAll = event.params.allowAll

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeatureFlagAllowlistAdded(
  event: FeatureFlagAllowlistAddedEvent
): void {
  let entity = new FeatureFlagAllowlistAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.feature = event.params.feature
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeatureFlagAllowlistRemoved(
  event: FeatureFlagAllowlistRemovedEvent
): void {
  let entity = new FeatureFlagAllowlistRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.feature = event.params.feature
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeatureFlagDeniersReset(
  event: FeatureFlagDeniersResetEvent
): void {
  let entity = new FeatureFlagDeniersReset(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  let deniers: Array<Bytes> = event.params.deniers.map<Bytes>((address: Address): Bytes => {
    return address as Bytes;
  });
  
  entity.feature = event.params.feature
  entity.deniers = deniers

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeatureFlagDenyAllSet(
  event: FeatureFlagDenyAllSetEvent
): void {
  let entity = new FeatureFlagDenyAllSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.feature = event.params.feature
  entity.denyAll = event.params.denyAll

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAccountFlaggedForLiquidation(
  event: AccountFlaggedForLiquidationEvent
): void {
  let entity = new AccountFlaggedForLiquidation(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.accountId = event.params.accountId
  entity.availableMargin = event.params.availableMargin
  entity.requiredMaintenanceMargin = event.params.requiredMaintenanceMargin
  entity.liquidationReward = event.params.liquidationReward
  entity.flagReward = event.params.flagReward

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAccountLiquidationAttempt(
  event: AccountLiquidationAttemptEvent
): void {
  let entity = new AccountLiquidationAttempt(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.accountId = event.params.accountId
  entity.reward = event.params.reward
  entity.fullLiquidation = event.params.fullLiquidation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePositionLiquidated(event: PositionLiquidatedEvent): void {
  let entity = new PositionLiquidated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.accountId = event.params.accountId
  entity.marketId = event.params.marketId
  entity.amountLiquidated = event.params.amountLiquidated
  entity.currentPositionSize = event.params.currentPositionSize

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFundingParametersSet(
  event: FundingParametersSetEvent
): void {
  let entity = new FundingParametersSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.marketId = event.params.marketId
  entity.skewScale = event.params.skewScale
  entity.maxFundingVelocity = event.params.maxFundingVelocity

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLiquidationParametersSet(
  event: LiquidationParametersSetEvent
): void {
  let entity = new LiquidationParametersSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.marketId = event.params.marketId
  entity.initialMarginRatioD18 = event.params.initialMarginRatioD18
  entity.maintenanceMarginRatioD18 = event.params.maintenanceMarginRatioD18
  entity.minimumInitialMarginRatioD18 =
    event.params.minimumInitialMarginRatioD18
  entity.flagRewardRatioD18 = event.params.flagRewardRatioD18
  entity.minimumPositionMargin = event.params.minimumPositionMargin

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLockedOiRatioSet(event: LockedOiRatioSetEvent): void {
  let entity = new LockedOiRatioSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.marketId = event.params.marketId
  entity.lockedOiRatioD18 = event.params.lockedOiRatioD18

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketPriceDataUpdated(
  event: MarketPriceDataUpdatedEvent
): void {
  let entity = new MarketPriceDataUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.marketId = event.params.marketId
  entity.feedId = event.params.feedId
  entity.strictStalenessTolerance = event.params.strictStalenessTolerance

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMaxLiquidationParametersSet(
  event: MaxLiquidationParametersSetEvent
): void {
  let entity = new MaxLiquidationParametersSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.marketId = event.params.marketId
  entity.maxLiquidationLimitAccumulationMultiplier =
    event.params.maxLiquidationLimitAccumulationMultiplier
  entity.maxSecondsInLiquidationWindow =
    event.params.maxSecondsInLiquidationWindow
  entity.maxLiquidationPd = event.params.maxLiquidationPd
  entity.endorsedLiquidator = event.params.endorsedLiquidator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMaxMarketSizeSet(event: MaxMarketSizeSetEvent): void {
  let entity = new MaxMarketSizeSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.marketId = event.params.marketId
  entity.maxMarketSize = event.params.maxMarketSize

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMaxMarketValueSet(event: MaxMarketValueSetEvent): void {
  let entity = new MaxMarketValueSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.marketId = event.params.marketId
  entity.maxMarketValue = event.params.maxMarketValue

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderFeesSet(event: OrderFeesSetEvent): void {
  let entity = new OrderFeesSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.marketId = event.params.marketId
  entity.makerFeeRatio = event.params.makerFeeRatio
  entity.takerFeeRatio = event.params.takerFeeRatio

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSettlementStrategyAdded(
  event: SettlementStrategyAddedEvent
): void {
  let entity = new SettlementStrategyAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.marketId = event.params.marketId
  entity.strategy_strategyType = event.params.strategy.strategyType
  entity.strategy_settlementDelay = event.params.strategy.settlementDelay
  entity.strategy_settlementWindowDuration =
    event.params.strategy.settlementWindowDuration
  entity.strategy_priceVerificationContract =
    event.params.strategy.priceVerificationContract
  entity.strategy_feedId = event.params.strategy.feedId
  entity.strategy_settlementReward = event.params.strategy.settlementReward
  entity.strategy_disabled = event.params.strategy.disabled
  entity.strategy_commitmentPriceDelay =
    event.params.strategy.commitmentPriceDelay
  entity.strategyId = event.params.strategyId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSettlementStrategySet(
  event: SettlementStrategySetEvent
): void {
  let entity = new SettlementStrategySet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.marketId = event.params.marketId
  entity.strategyId = event.params.strategyId
  entity.strategy_strategyType = event.params.strategy.strategyType
  entity.strategy_settlementDelay = event.params.strategy.settlementDelay
  entity.strategy_settlementWindowDuration =
    event.params.strategy.settlementWindowDuration
  entity.strategy_priceVerificationContract =
    event.params.strategy.priceVerificationContract
  entity.strategy_feedId = event.params.strategy.feedId
  entity.strategy_settlementReward = event.params.strategy.settlementReward
  entity.strategy_disabled = event.params.strategy.disabled
  entity.strategy_commitmentPriceDelay =
    event.params.strategy.commitmentPriceDelay

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCollateralConfigurationSet(
  event: CollateralConfigurationSetEvent
): void {
  let entity = new CollateralConfigurationSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.synthMarketId = event.params.synthMarketId
  entity.maxCollateralAmount = event.params.maxCollateralAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeCollectorSet(event: FeeCollectorSetEvent): void {
  let entity = new FeeCollectorSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.feeCollector = event.params.feeCollector

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInterestRateParametersSet(
  event: InterestRateParametersSetEvent
): void {
  let entity = new InterestRateParametersSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lowUtilizationInterestRateGradient =
    event.params.lowUtilizationInterestRateGradient
  entity.interestRateGradientBreakpoint =
    event.params.interestRateGradientBreakpoint
  entity.highUtilizationInterestRateGradient =
    event.params.highUtilizationInterestRateGradient

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInterestRateUpdated(
  event: InterestRateUpdatedEvent
): void {
  let entity = new InterestRateUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.superMarketId = event.params.superMarketId
  entity.interestRate = event.params.interestRate

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleKeeperCostNodeIdUpdated(
  event: KeeperCostNodeIdUpdatedEvent
): void {
  let entity = new KeeperCostNodeIdUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.keeperCostNodeId = event.params.keeperCostNodeId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleKeeperRewardGuardsSet(
  event: KeeperRewardGuardsSetEvent
): void {
  let entity = new KeeperRewardGuardsSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.minKeeperRewardUsd = event.params.minKeeperRewardUsd
  entity.minKeeperProfitRatioD18 = event.params.minKeeperProfitRatioD18
  entity.maxKeeperRewardUsd = event.params.maxKeeperRewardUsd
  entity.maxKeeperScalingRatioD18 = event.params.maxKeeperScalingRatioD18

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePerAccountCapsSet(event: PerAccountCapsSetEvent): void {
  let entity = new PerAccountCapsSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.maxPositionsPerAccount = event.params.maxPositionsPerAccount
  entity.maxCollateralsPerAccount = event.params.maxCollateralsPerAccount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReferrerShareUpdated(
  event: ReferrerShareUpdatedEvent
): void {
  let entity = new ReferrerShareUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.referrer = event.params.referrer
  entity.shareRatioD18 = event.params.shareRatioD18

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSynthDeductionPrioritySet(
  event: SynthDeductionPrioritySetEvent
): void {
  let entity = new SynthDeductionPrioritySet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newSynthDeductionPriority = event.params.newSynthDeductionPriority

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
