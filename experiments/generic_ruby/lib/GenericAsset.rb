class GenericAsset
  attr_reader :owner, :asset_hash

  def initialize(owner:, asset_hash:)
    @owner = owner
    @asset_hash = asset_hash
    @mortgaged_under = nil
  end

  def mortgaged?
    !!@mortgaged_under
  end

  def transact(initiator:, receipient:)
    if owner_is_initiator?(initiator: initiator)
      unless mortgaged?
        @owner = receipient
      else
        fail 'Asset cannot be transferred now as it is mortgaged!'
      end
    else
      fail 'Asset can only be transferred by the owner!'
    end
  end

  def owner_is_initiator?(initiator:)
    @owner == initiator
  end

  def mortgage(initiator:, bank:)
    if owner_is_initiator?(initiator: initiator)
      @mortgaged_under = bank
    else
      fail 'Asset can only be mortgaged by the owner!'
    end
  end
end
